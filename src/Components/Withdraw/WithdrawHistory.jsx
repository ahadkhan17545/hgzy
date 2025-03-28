import { MdFileCopy } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import empty from "../../../public/empty.png";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

        <div className="grid grid-cols-3 gap-4">
          <div className="px-6 py-7 text-white bg-red text-center rounded-md">
            <p>E-Wallet</p>
          </div>
          <div className="px-2 py-4 hover:text-white bg-white hover:bg-red duration-300 text-center rounded-md">
            <img
              className="w-8 m-auto"
              src="https://ossimg.crhhh.com/bdtgame/payNameIcon/WithBeforeImgIcon_20230912191710wdgg.png"
              alt=""
            />
            <p>USDT</p>
          </div>
        </div>

        <Link>
          <div className="mt-3 p-2 flex flex-col items-center justify-center bg-white rounded-lg">
            <Link to="/method">
            <div className="p-3 rounded-sm border border-dashed text-gray border-gray">
              <FaPlus />
            </div>
            </Link>
            <p>Add</p>
          </div>
        </Link>

        <div className="bg-white p-4 rounded-md space-y-4">
          <form action="" className="space-y-2">
            <input
              type="text"
              className="w-full px-6 py-2 bg-backgroundWhite rounded-full border-none outline-none"
              placeholder="৳"
            />

            <div className="text-red text-sm font-medium flex justify-between items-center gap-1">
              <p className="font-normal">Withdrawable balance৳0.00</p>
              <span className="px-6 border border-red rounded-xl">All</span>
            </div>
            <div className="text-gray text-sm font-medium flex justify-between items-center gap-1">
              <p className="font-normal">Withdrawal amount received</p>
              <span className="text-red">৳0.00</span>
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
