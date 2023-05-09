import Endpoint from "../../assets/images/end-point.svg"



const List = ({ logo, title, name, update, nameData, date, time, priority }) => {
  return (
    <div className="mainlist">
      <div>
        <div className="mainlist__wrap">
          <img src={logo} alt="" />
          <div className="mainlist-first">
            <p className="mainlist__title">{title}</p>
            <p className="mainlist__text">Update {update} day ago</p>
          </div>
          <div>
            <p className="mainlist__title">{name}</p>
            <p className="mainlist__text">on {nameData}</p>
          </div>
          <div>
            <p className="mainlist__title">{date}</p>
            <p className="mainlist__text">{time}</p>
          </div>
          <div>
            <button className="mainlist__btn">{priority}</button>
          </div>
          <img src={Endpoint} alt="" />
        </div>
      </div>
    </div>
  );
};

export default List;
