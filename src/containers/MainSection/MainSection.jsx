import Header from "../../components/HeaderSection/HeaderSection";
import Content from "../../components/MainContent/MainContent";
import "./mainsection.scss"
import { Search, Notifications } from "../../assets/icons/Icon";


const MainSection = ( ) => {
    return (
        <div className="main-section">
            <div className="header"><Header search={<Search/>}  notifications={<Notifications/>}/></div>
            <div className="content"><Content/></div>
        </div>

    )

    
}

export default MainSection;