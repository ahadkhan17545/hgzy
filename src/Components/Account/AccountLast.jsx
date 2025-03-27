import { AiOutlineSafety } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";


import { CiPower } from "react-icons/ci";
import AccountLastFeatures from "./AccountLastFeatures";
import AccountLastNotification from "./AccountLastNotification";
import AccountLastNewFeatures from "./AccountLastNewFeatures";

const AccountLast = ({ language }) => {
  

  return (
    <div className="mt-32 md:mt-16 px-2  ">
      {/* safe */}
      <div className="flex items-center gap-2 justify-center">
        <AiOutlineSafety className="text-5xl text-accountYellow" />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className="font-bold">
               {language==='en'?"Safe":"নিরাপদ"} 
                </h3>
            <div className="flex items-center">
              <p className="font-bold rounded-full bg-accountYellow px-1 text-white">
                ৳0.00
              </p>
              <FaAngleRight />
            </div>
          </div>

          <p className=" leading-tight text-sm pt-2 ">

          {language==='en'?"The daily interest rate is 0.1%, and the income is calculated\nonce every 1 minutes.":"দৈনিক সুদের হার ০.১%, এবং আয় প্রতি ১ মিনিটে\nএকবার গণনা করা হয়।"} 
            
          </p>
        </div>
      </div>
      {/* features */}
      <AccountLastFeatures language={language} />

      {/* Account notification */}
      <AccountLastNotification language={language}/>

      {/* new Features */}
      <h3 className="pt-10">
            {language==='en'?"Service Center":"সেবা কেন্দ্র"}
        </h3>
      <AccountLastNewFeatures language={language}/>
      <div className="px-6 ">
        <button className="w-full flex py-1 justify-center text-xl gap-1 items-center border border-red text-red rounded-full ">
          <CiPower className="text-2xl" />
          {language==='en'?"Log out":" সাইন আউট"}
          
        </button>
      </div>
    </div>
  );
};

export default AccountLast;
