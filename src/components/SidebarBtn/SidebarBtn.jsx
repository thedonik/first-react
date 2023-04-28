import "./sidebarbtn.scss"
const SidebarBtn = ({title, icon} ) => {
    return (
        <button className="btn">
            <span className="btn-icon">{icon}</span>
            <span className="btn-title">{title}</span>
        </button>
        )
        
        
    }
    
    export default SidebarBtn