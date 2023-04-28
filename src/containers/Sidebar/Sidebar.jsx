import SidebarBtn from "../../components/SidebarBtn/SidebarBtn"
import "./sidebar.scss"
import { Chart, Settings, Agents, Articles, Tickets, Ideas, Contacts, Subscription } from "../../assets/icons/Icon"
import SidebarLogo from "../../components/SidebarLogo/SidebarLogo"

const SideBar = () => {
    return (
        <div className="sidebar">
        <div className="logo">
        <SidebarLogo/>
        </div>
        
        <div className="sidebar-btn">
        <div className="top-btn">
        <SidebarBtn icon={<Chart/>} title="Overview"/>
        <SidebarBtn icon={<Tickets/>} title="Tickets"/>
        <SidebarBtn icon={<Ideas/>} title="Ideas"/>
        <SidebarBtn icon={<Contacts/>} title="Contacts"/>
        <SidebarBtn icon={<Agents/>} title="Agents"/>
        <SidebarBtn icon={<Articles/>} title="Articles"/>
        </div>
        <div className="bottom-btn">
        <SidebarBtn icon={<Settings/>} title="Settings"/>
        <SidebarBtn icon={<Subscription/>} title="Subscription"/>
        </div>
        </div>
        </div>
        )
        
        
    }
    
    export default SideBar;