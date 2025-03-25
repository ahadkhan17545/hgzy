import { useContext, useState } from "react";
import LoginTabs from "../Components/Login/LoginTabs";
import { LanguageContext } from "../Components/Context/LanguageContext";
import TopLogin from "../Components/Login/TopLogin";

const Login = ({ setIsOpen }) => {
  const {  language, setLanguage } = useContext(LanguageContext);

  // const [language, setLanguage] = useState("en"); // Default English
  const [isLangModalOpen, setIsLangModalOpen] = useState(false); // Modal state
// const [isIopenRegister,setIsOpenRegister] = useState();
  // Texts for both languages
  const texts = {
    en: {
      title: "Login",
      username: "Username",
      password: "Password",
      login: "Log in",
      close: "Close",
      changeLang: "EN",
      signUp:"Register"
    },
    bn: {
      title: "প্রবেশ করুন",
      username: "ইউজারনেম",
      password: "পাসওয়ার্ড",
      login: "প্রবেশ করুন",
      close: "বন্ধ করুন",
      changeLang: "BN",
      signUp:"নিবন্ধন"
    },
  };

  return (
    <div className="  inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all">
        <div className="bg-lightWhite  rounded-lg shadow-lg w-full  max-w-[480px] mx-auto min-h-screen ">

        
      <TopLogin 
      setIsOpen={setIsOpen}
      setIsLangModalOpen={setIsLangModalOpen}
      language={language}
      texts={texts}
      isLangModalOpen={isLangModalOpen}
      setLanguage={setLanguage}
      />

      <LoginTabs
      texts={texts}
      language={language}
      />
      </div>
    </div>
  );
};

export default Login;
