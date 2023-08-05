import { NavLink } from "react-router-dom"
import { FaChartLine, FaCalendarDays, FaCircleUser, FaArrowRightFromBracket, FaCubesStacked } from "react-icons/fa6"

const NavItems = [
    {
        id: 1,
        name: "Dashboard",
        url: "/",
        icon: <FaChartLine />
    },
    {
        id: 2,
        name: "Calendar",
        url: "/calendar",
        icon: <FaCalendarDays />
    },
    {
        id: 3,
        name: "Profile",
        url: "/profile",
        icon: <FaCircleUser />
    },
    {
        id: 4,
        name: "Logout",
        url: "/logout",
        icon: <FaArrowRightFromBracket />
    }
]

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logospace">
                <FaCubesStacked style={{ color: "#0029FF" }} /> &nbsp;
                Taskmanager
            </div>
            <div className="nav-items">
                {NavItems.map((item) => (
                    <NavLink key={item.id} to={item.url} className="nav-item">
                        {item.icon}
                        <div className={"nav-item-name"}>
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar