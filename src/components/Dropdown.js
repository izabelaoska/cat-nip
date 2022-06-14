import React from "react"
import { HiMenu } from "react-icons/hi"

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-end text-xs">
      <label tabIndex={0}>
        <button className="notifications-button">
          <HiMenu size={18} className="notificationsIcon" />
        </button>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
      >
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
