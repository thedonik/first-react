import Content from "../../components/MainContent/MainContent";
import "./mainsection.scss"
import SearchBtn from "../../assets/images/search.svg"
import Notification from "../../assets/images/new.svg"
import ProfileImg from "../../assets/images/photo.png"



const MainSection = ( ) => {
    return (
        <div className="main-section">
            <div className="header">
                <p className="page-name">Tickets</p>
                <div className="header-btn">
                    <img className="search" src={SearchBtn} alt="" />
                    <img className="notification" src={Notification} alt="" />
                </div>
                <div className="header-profile">
                    <p className="header-name">Jones Ferdinand</p>
                    <img src={ProfileImg} alt="" />
                </div>
            </div>     
            <Content/>
        </div>

    )

    
}

export default MainSection;