import getUserBalance from "@/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div
      className={`border-2 p-2 border-gray-600 rounded-xl ${
        (balance ?? 0) > 0 ? "bg-green-300" : "bg-red-300"
      }`}
    >
      <h1 className="text-md ">Your Balance</h1>
      <p className="font-bold text-3xl">$ {addCommas(balance ?? 0)}</p>
    </div>
  );
};

export default Balance;
