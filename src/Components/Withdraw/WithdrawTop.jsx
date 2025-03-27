import { RxCaretLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

const WithdrawTop = () => {
  return (
    <div className="text-black bg-white py-2 max-w-[480px] m-auto fixed top-0 w-full z-40">
      <div className="flex justify-between items-center pr-4">
        <Link to="/">
          <div className="px-1">
            <RxCaretLeft size={30} />
          </div>
        </Link>
        <h2 className="ml-12 text-2xl font-semibold text-center">Withdraw</h2>
        <p className="text-sm text-black">Withdrawal history</p>
      </div>
    </div>
  );
};

export default WithdrawTop;
