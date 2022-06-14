import React from "react"
import { MdOutlineNotificationsNone } from "react-icons/md"
import Dropdown from "./Dropdown"

const Navbar = () => {
  return (
    <nav className="max-w-[360px] mx-auto pl-[20px] pr-[20px]">
      <div className="flex justify-between items-center h-20">
        <div className="text-left text-xl">CAT NIP</div>
        <div className="flex">
          <button className="notifications-button mr-2">
            <MdOutlineNotificationsNone
              size={18}
              className="notificationsIcon"
            />
          </button>
          <Dropdown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
