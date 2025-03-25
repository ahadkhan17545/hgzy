import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-backgroundWhite">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className=" bg-white">
          <Outlet context={{ isOpen, setIsOpen }} />
          {/* const { isOpen, setIsOpen } = useOutletContext(); */}
        </main>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* footer menu */}
        {/* <div className="flex sticky bottom-0 w-full z-50 bg-white">
          <Link to={"/"} className="">
            <p className="p-3 text-base text-center font-semibold text-black bg-[#FFCD03] hover:bg-[#e5be22] transition-all duration-500">
              নিবন্ধন করুন
            </p>
          </Link>
          <Link to={"/"} className="">
            <p className="p-3 text-base text-center font-semibold text-white bg-[#0083FB] hover:bg-[#2f9bff] transition-all duration-500">
              প্রবেশ করুন
            </p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MainLayout;
