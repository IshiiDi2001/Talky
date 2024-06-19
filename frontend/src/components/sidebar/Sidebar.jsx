import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import logoImage from "../../assets/Logo.png";

const Sidebar = () => {
  return (
    <div className="border-r bg-white border-darkOrange p-4 flex flex-col">
      <div className="flex items-center justify-center">
        <img src={logoImage} alt="Logo" className="h-16 w-auto mt-0 mb-3" />
      </div>
      <SearchInput />
      <div className="divider border-t-2 border-lightOrange px-3"></div>
      {/* <div className="divider px-3"></div> */}
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
