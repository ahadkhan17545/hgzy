import { MdFileCopy } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import empty from "../../../public/empty.png";
import { ImBook } from "react-icons/im";

const DepositHistory = () => {
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
              <p className="text-white text-base font-medium">Balance</p>
            </div>
            <div className="mt-2 text-white flex items-center gap-1">
              <span>
                <TbCurrencyTaka size={28} />
              </span>
              <p className="text-xl font-bold">0.00</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-1 mb-4">
            <ImBook size={24} className="text-red" />
            <p className="text-xl font-semibold text-black">
              Recharge instructions
            </p>
          </div>
          <div className="text-gray text-sm font-normal bg-white p-4 rounded-md border border-indigo-200 space-y-2.5">
            <p>
              If the transfer time is up, please fill out the deposit form
              again.
            </p>
            <p>
              The transfer amount must match the order you created, otherwise
              the money cannot be credited successfully.
            </p>
            <p>
              If you transfer the wrong amount, our company will not be
              responsible for the lost amount!
            </p>
            <p>
              Note: do not cancel the deposit order after the money has been
              transferred.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-1 mb-4">
            <MdFileCopy size={28} className="text-red" />
            <p className="text-xl font-semibold text-black">Deposit history</p>
          </div>
          <img className="w-64 m-auto" src={empty} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
