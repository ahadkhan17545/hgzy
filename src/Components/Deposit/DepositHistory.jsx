import { MdFileCopy } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import empty from "../../../public/empty.png";
import { ImBook } from "react-icons/im";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const DepositHistory = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (number) => {
    setInputValue(number); // আগের মান মুছে নতুন মান বসাবে
  };

  const handleClear = () => {
    setInputValue(""); // ইনপুট ফিল্ড খালি করবে
  };

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

        <div className="grid grid-cols-3 gap-4">
          <div className="px-2 py-4 text-white bg-red duration-300 text-center rounded-md">
            <img
              className="w-8 m-auto"
              src="https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon2_202305271853108ybn.png"
              alt=""
            />
            <p className="text-sm font-normal">Nagad</p>
          </div>

          <div className="px-2 py-4 hover:text-white bg-white hover:bg-red duration-300 text-center rounded-md">
            <img
              className="w-8 m-auto"
              src="https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230527185226qqyl.png"
              alt=""
            />
            <p className="text-sm font-normal">bKash</p>
          </div>

          <div className="px-2 py-4 hover:text-white bg-white hover:bg-red duration-300 text-center rounded-md">
            <img
              className="w-8 m-auto"
              src="https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230527185659ww9g.png"
              alt=""
            />
            <p className="text-sm font-normal">Rocket</p>
          </div>

          <div className="px-2 py-4 hover:text-white bg-white hover:bg-red duration-300 text-center rounded-md">
            <img
              className="w-8 m-auto"
              src="https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230527185720wrmf.png"
              alt=""
            />
            <p className="text-sm font-normal">Upay</p>
          </div>

          <div className="px-2 py-4 hover:text-white bg-white hover:bg-red duration-300 text-center rounded-md">
            <img
              className="w-8 m-auto"
              src="https://ossimg.crhhh.com/bdtgame/payNameIcon/payNameIcon_20230606184906negf.jpg"
              alt=""
            />
            <p className="text-sm font-normal">USDT BONUS</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md space-y-4">
          <div className="flex items-center gap-1 mb-4">
            <MdFileCopy size={24} className="text-red" />
            <p className="text-lg sm:text-xl font-semibold text-black">
              Select Channel
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="px-2 py-4 text-white bg-red duration-300 rounded-md">
              <p className="text-base font-normal">EPayBDT-NAGAD</p>
              <p className="text-base font-normal">Balance:300 - 25K</p>
            </div>

            <div className="px-2 py-4 hover:text-white bg-backgroundWhite hover:bg-red duration-300 rounded-md">
              <p className="text-base font-normal">DeePayBDT-NAGAD</p>
              <p className="text-base font-normal">Balance:100 - 50K</p>
            </div>

            <div className="px-2 py-4 hover:text-white bg-backgroundWhite hover:bg-red duration-300 rounded-md">
              <p className="text-base font-normal">AEEPayBDT-NAGAD</p>
              <p className="text-base font-normal">Balance:300 - 25K</p>
            </div>

            <div className="px-2 py-4 hover:text-white bg-backgroundWhite hover:bg-red duration-300 rounded-md">
              <p className="text-base font-normal">CashPayBDT-nagad</p>
              <p className="text-base font-normal">Balance:300 - 25K</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md space-y-4">
          <div className="flex items-center gap-1 mb-4">
            <MdFileCopy size={24} className="text-red" />
            <p className="text-lg sm:text-xl font-semibold text-black">
              Deposit Amount
            </p>
          </div>

          <div className="">
            <div className="grid grid-cols-3 gap-3 text-red">
              {[200, 500, 1000, 1500, 2000, 2500].map((num, index) => (
                <div
                  key={index}
                  className="p-1 text-base text-center font-semibold border border-slate-300 rounded-lg cursor-pointer"
                  onClick={() => handleClick(num)}
                >
                  {num}
                </div>
              ))}
            </div>

            {/* ইনপুট ফিল্ড */}
            <div className="relative mt-3">
              {/* ডলার আইকন (বাম পাশে) */}
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <TbCurrencyTaka />
              </span>

              <input
                type="text"
                value={inputValue}
                readOnly
                className="bg-backgroundWhite py-1.5 px-10 w-full rounded-lg outline-none"
              />

              {/* ক্লোস আইকন (ডান পাশে) */}
              {inputValue && (
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={handleClear}
                >
                  <FaTimes />
                </span>
              )}
            </div>
          </div>

          <button className="p-1.5 text-base font-medium text-gray bg-slate-300 w-full rounded-full">
            Deposit
          </button>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <ImBook size={24} className="text-red" />
          <p className="text-lg sm:text-xl font-semibold text-black">
            Recharge instructions
          </p>
        </div>

        <div className="text-gray text-sm font-normal bg-white p-4 rounded-md border border-indigo-200 space-y-2.5">
          <p>
            If the transfer time is up, please fill out the deposit form again.
          </p>
          <p>
            The transfer amount must match the order you created, otherwise the
            money cannot be credited successfully.
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

        <div className="flex items-center gap-1 mb-4">
          <MdFileCopy size={28} className="text-red" />
          <p className="text-lg sm:text-xl font-semibold text-black">
            Deposit history
          </p>
        </div>

        <img className="w-64 m-auto" src={empty} alt="" />
      </div>
    </div>
  );
};

export default DepositHistory;
