import getIncomeExpence from "@/actions/getIncomeExpence";
import getUserBalance from "@/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const IncomeExpence = async () => {
  const { income } = await getIncomeExpence();
  const { balance } = await getUserBalance();
  const expence = (income ?? 0) - (balance ?? 0);

  return (
    <div className="flex p-2">
      <div className="border-2 p-2 bg-yellow-100">
        <h1> Income</h1>
        <p className="font-bold text-3xl text-green-500">
          ${addCommas(income ?? 0)}
        </p>
      </div>
      <div className="border-2 p-2 bg-yellow-100">
        <h1> Expence</h1>
        <p className="font-bold text-3xl text-red-500">
          ${addCommas(Number(expence.toFixed(2)))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpence;
