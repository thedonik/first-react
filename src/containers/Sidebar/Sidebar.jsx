import SidebarBtn from "../../components/SidebarBtn/SidebarBtn"
import "./sidebar.scss"
import { Chart, Settings, Agents, Articles, Tickets, Ideas, Contacts, Subscription } from "../../assets/icons/Icon"
import Sitelog from "../../assets/images/logo.svg"


const SideBar = () => {  

    return (
        <div className="sidebar">
            <div className="logo-holder">
                <img src={Sitelog} alt="logo" />
                <span className="sitebar-text">Dashboard Kit</span>
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