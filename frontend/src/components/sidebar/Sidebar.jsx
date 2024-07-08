import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import logoImage from "../../assets/Logo.png";

const Divider = () => {
  return <div className="border-t-2 border-lightOrange mt-4 shadow-sm"></div>;
};

const Sidebar = () => {
  return (
    <div className="hidden md:flex border-r bg-white border-darkOrange p-4 flex-col">
      <div className="flex items-center justify-center">
        <img src={logoImage} alt="Logo" className="h-16 w-auto mt-0 mb-3" />
      </div>
      <SearchInput />
      <Divider />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
