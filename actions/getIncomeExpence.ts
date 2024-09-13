import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const getIncomeExpence = async (): Promise<{
  income?: number;
  error?: string;
}> => {
  const { userId } = auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    });

    const income = transactions.reduce((acc, transaction) => {
      if (transaction.amount > 0) {
        return acc + transaction.amount;
      }
      return acc; // Don't forget to return acc if transaction.amount <= 0
    }, 0);

    return { income };
  } catch (error) {
    return { error: "Database error" };
  }
};

export default getIncomeExpence;
