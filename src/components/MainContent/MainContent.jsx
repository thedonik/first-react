import "./MainContent.scss"
import Sort from "../../assets/images/sort.svg"
import Filter from "../../assets/images/filter.svg"
import Tom from "../../assets/images/1.png";
import Chris from "../../assets/images/2.png";
import Henry from "../../assets/images/3.png";
import Chrs from "../../assets/images/4.png";
import Matt from "../../assets/images/5.png";
import Robert from "../../assets/images/6.png";
import Sam from "../../assets/images/7.png";
import Stive from "../../assets/images/8.png";
import List from "../List/Lists";
const Base = [
  {
    logo: Tom,
    title: "Contact Email not Linked",
    name: "Tom Cruise",
    nameData:"24.05.2019",
    update: "1",
    date: "May 26, 2019",
    time: "6:30 PM",
    priority: "High",
  },
  {
    logo: Chris,
    title: "Downtime since last week",
    name: "Chris Evans",
    nameData:"24.05.2019",
    update: "1",
    date: "May 25, 2019",
    time: "2:00 PM",
    priority: "Normal",
  },
  {
    logo: Chrs,
    title: "Payment not going through",
    name: "Christian Bale",
    nameData:"24.05.2019",
    update: "1",
    date: "May 25, 2019",
    time: "5:00 PM",
    priority: "Normal",
  },
  {
    logo: Henry,
    title: "Unable to add replies",
    name: "Henry Cavil",
    nameData:"24.05.2019",
    update: "2",
    date: "May 25, 2019",
    time: "4:00 PM",
    priority: "High",
  },
  {
    logo: Matt,
    title: "Adding Images to Featured Posts",
    name: "Matt Damon",
    nameData:"24.05.2019",
    update: "2",
    date: "May 26, 2019",
    time: "8:00 AM",
    priority: "low",
  },
  {
    logo: Robert,
    title: "When will I be charged this month?",
    name: "Robert Downey",
    nameData:"24.05.2019",
    update: "3",
    date: "May 26, 2019",
    time: "7:30 PM",
    priority: "High",
  },
  {
    logo: Sam,
    title: "Referral Bonus",
    name: "Sam Smith",
    nameData:"24.05.2019",
    update: "4",
    date: "May 25, 2019",
    time: "2:00 PM",
    priority: "Low",
  },
  {
    logo: Stive,
    title: "How do I change my password?us",
    name: "Steve Rogers",
    nameData:"21.05.2019",
    update: "6",
    date: "May 24, 2019",
    time: "1:00 PM",
    priority: "Normal",
  }
  
];


const MainContent = () => {
    return(
        <div className="main-content">
            <div className="content-top">
                <p className="content-top-name">
                    All tickets
                </p>
                <div className="content-top-btn">
                    <div className="sort-box">
                        <img className="sort-svg" src={Sort} alt="sort btn" />
                        <p className="sort-text">Sort</p>
                    </div>
                    <div className="filter-box">
                        <img className="filter-svg" src={Filter} alt="filter btn" />
                        <p className="filter-text">Filter</p>
                    </div>
                </div>
            </div>
            <div className="content-list">
                <div className="details">
                    <span className="first">Ticket details</span>
                    <span className="second">Customer name</span>
                    <span className="third">Date</span>
                    <span className="fourth">Priority</span>
                </div>
                {Base.map((e) => {
        return (
          <List
            key={Math.random()}
            logo={e.logo}
            title={e.title}
            name={e.name}
            nameData={e.nameData}
            updated={e.update}
            priority={e.priority}
            date={e.date}
            time={e.time}
          />
        );
      })}
               
            </div>
        </div>
    )
}


export default MainContent

