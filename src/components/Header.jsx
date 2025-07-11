import { Link } from "react-router";
import {
  FakebookLogo,
  FriendIcon,
  HomeIcon,
  MarketIcon,
  MenuIcon,
  MessagerIcon,
  NotiIcon,
  PlayIcon,
  SearchIcon,
} from "../icons";
import useUserStore from "../stores/userStore";

function Header() {
  const logout = useUserStore((state) => state.logout);

  return (
    <div className="flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
      {/* Search bar */}
      <div className="flex-1 flex gap-2 items-center pe-2">
        {<FakebookLogo className="w-12" />}
        <label className="input rounded-full ">
          <input placeholder="Search" />
          <SearchIcon className="w-5 opacity-60" />
        </label>
      </div>
      {/* Navigator */}
      <div className="flex-1 flex gap-2 justify-center">
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          {<HomeIcon className="w-1/2" />}
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          {<PlayIcon className="w-1/2" />}
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          {<MarketIcon className="w-1/2" />}
        </Link>
        <Link
          to="/friends"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          {<FriendIcon className="w-1/2" />}
        </Link>
      </div>

      {/* Droupdown */}
      <div className="flex-1 flex gap-3 justify-end">
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400" >
            <MenuIcon className="w-5"/>
           </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400" >
            <MessagerIcon className="w-5"/>
           </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400" >
            <NotiIcon className="w-5"/>
           </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
