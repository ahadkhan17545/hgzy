import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App bg-sideBg min-h-screen">
      <div className="w-full max-w-[480px] mx-auto bg-white">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className=" bg-white">
        <Outlet context={{isOpen,setIsOpen}} />
        {/* const { isOpen, setIsOpen } = useOutletContext(); */}
      </main>
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default MainLayout;
