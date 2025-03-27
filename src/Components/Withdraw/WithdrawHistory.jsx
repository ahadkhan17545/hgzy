import { MdFileCopy } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import empty from "../../../public/empty.png";

const WithdrawHistory = () => {
  return (
    <div className="bg-backgroundWhite">
      <div className="pt-12 pb-4 px-2 sm:px-4 py-4 space-y-4">
        <div className="relative">
          <img
            src="https://hgzy.org/assets/png/TotalAssetsBg-81d648d4.png"
            alt=""
          />
          <div className="absolute top-5 left-5">
            <div className="flex items-center gap-1.5">
              <img
                className="w-5"
                src="https://hgzy.org/assets/png/balance-e39ce400.png"
                alt=""
              />
              <p className="text-white text-base font-medium">
                Available balance
              </p>
            </div>
            <div className="mt-2 text-white flex items-center gap-1">
              <span>
                <TbCurrencyTaka size={28} />
              </span>
              <p className="text-xl font-bold">0.00</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md space-y-4">
          <form action="">
            <input
              type="text"
              className="w-full px-4 py-2 bg-backgroundWhite rounded-full border-none outline-none"
              placeholder="৳"
            />

            <div className="">
                <p></p>
            </div>

            <button className="w-full p-2 text-base font-semibold text-white bg-red rounded-full">
              Withdraw
            </button>
          </form>

          <div className="text-gray text-sm font-normal bg-white p-4 rounded-md border border-indigo-200 space-y-2.5">
            <p>
              Need to bet <span className="text-red">৳0.00</span> to be able to
              withdraw
            </p>
            <p>
              Withdraw time
              <span className="text-red">00:00-23:59</span>
            </p>
            <p>
              Inday Remaining Withdrawal Times
              <span className="text-red">3</span>
            </p>
            <p>
              Withdrawal amount range
              <span className="text-red">৳500.00-৳25,000.00</span>
            </p>
            <p>
              Please confirm your beneficial account information before
              withdrawing. If your information is incorrect, our company will
              not be liable for the amount of loss
            </p>
            <p>
              If your beneficial information is incorrect, please contact
              customer service
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-1 mb-4">
            <MdFileCopy size={28} className="text-red" />
            <p className="text-xl font-semibold text-black">
              Withdrawal history
            </p>
          </div>
          <img className="w-64 m-auto" src={empty} alt="" />
          <button className="w-full p-1.5 text-base font-semibold text-red rounded-full border border-red">
            All history
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
