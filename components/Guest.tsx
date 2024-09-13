import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="guest mt-10">
      <h1 className="text-3xl">Welcome</h1>
      <p className="mb-6">
        Please <span className="font-bold">sign in</span> to manage your
        transactions
      </p>
      <SignInButton />
    </div>
  );
};

export default Guest;
