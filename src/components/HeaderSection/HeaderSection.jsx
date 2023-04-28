import "./header.scss"

const Header = ({search, notifications}) => {
    return(
        <div className="header">
        <p className="header-text">Tickets</p>
        <div className="header-btns">
        <span className="search-btn">{search}</span>
        <span className="notification-btn">{notifications}</span></div> 
        </div>
        )
    }
    
    
    export default Header
    
    