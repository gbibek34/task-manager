import { NavLink } from "react-router-dom"
import { FaStar, FaCalendar, FaHashtag, FaCircleCheck, FaCubesStacked, FaDoorOpen } from "react-icons/fa6"

const logoutHandler = () => {
    localStorage.removeItem("token")
    window.location.reload()
}

const NavItems = [
    {
        id: 1,
        name: "Today",
        url: "/",
        icon: <FaStar />
    },
    {
        id: 2,
        name: "Upcoming",
        url: "/upcoming",
        icon: <FaCalendar />
    },
    {
        id: 3,
        name: "Important",
        url: "/important",
        icon: <FaHashtag />
    },
    {
        id: 4,
        name: "Completed",
        url: "/completed",
        icon: <FaCircleCheck />
    },
    {
        id: 5,
        name: "Logout",
        url: "/login",
        icon: <FaDoorOpen />,
        onclick: logoutHandler
    }
]

const Sidebar = ({ profile }) => {
    return (
        <div className="sidebar">
            <div className="nav-items">
                <div className="logospace">
                    <FaCubesStacked style={{ color: "#0029FF" }} /> &nbsp;
                    CheckMate
                </div>
                {NavItems.map((item) => (
                    <NavLink key={item.id} to={item.url} onClick={item.onclick} className="nav-item">
                        {item.icon}
                        <div className={"nav-item-name"}>
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <div className="profile-section">
                <div className="profile-picture">
                    <img src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="user-fname">
                    {profile && profile.fullname}
                </div>
                <div className="user-uname">
                    {profile && profile.username}
                </div>
                <div className="user-email">
                    {profile && profile.email}
                </div>
            </div>
        </div>
    )
}

export default Sidebar