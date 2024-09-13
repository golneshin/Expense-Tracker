import AddTransactions from "@/components/AddTransactions";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import Income from "@/components/IncomeExpence";
import TransactionsList from "@/components/TransactionsList";
import { checkUser } from "@/lib/checkUser";

const HomePage = async () => {
  const user = await checkUser();

  if (!user) {
    return <Guest />;
  }
  return (
    <>
      <div className="font-bold text-2xl">Welcome, {user.name}</div>
      <Income />
      <Balance />
      <AddTransactions />
      <TransactionsList />
    </>
  );
};

export default HomePage;
