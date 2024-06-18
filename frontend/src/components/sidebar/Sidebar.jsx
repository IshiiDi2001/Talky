import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import logoImage from "./Logo.png";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <div className="flex items-center justify-center">
        <img src={logoImage} alt="Logo" className="h-16 w-auto mt-0 mb-3" />
      </div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
