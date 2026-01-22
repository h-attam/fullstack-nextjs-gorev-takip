import { RxDashboard } from "react-icons/rx";
import { GrAnalytics } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaTicketAlt } from "react-icons/fa";

export const links = [
    {
        href:"/",
        title:"Dashboard",
        icon:<RxDashboard/>,
    },
    {
        href:"/tickets",
        title:"Tickets",
        icon:<FaTicketAlt/>,
    },
    {
        href:"/teams",
        title:"Takımlar",
        icon:<RiTeamFill/>,
    },
    {
        href:"/inbox",
        title:"Gelen Kutusu",
        icon:<HiInboxArrowDown/>,
    },
    {
        href:"/settings",
        title:"Ayarlar",
        icon:<IoMdSettings/>,
    },
    {
        href:"/statistics",
        title:"İstatistikler",
        icon:<GrAnalytics/>,
    }
]