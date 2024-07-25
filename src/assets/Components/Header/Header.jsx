import "./Header.css"
// import firstmount from "./../../../../public/Images/Rectangle 77.png"
// import secondmount from "./../../../../public/Images/Rectangle 78.png"
// import thirdmount from "./../../../../public/Images/Rectangle 84.png"
import { IoLocation } from "react-icons/io5";
// const mountans = [
//   {
//     image: firstmount,
//     country: "JAPAN",
//     view: " view on google maps",
//     name: "Mount Fuji",
//     date: "12 Jan, 2021 - 24 Jan, 2021",
//     caption:
//       "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//   },
//   {
//     image: firstmount,
//     country: "Australia",
//     view: " on google maps",
//     name: "Sydney Opera House",
//     date: "27 May, 2021 - 8 Jun, 2021",
//     caption:
//       "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
//   },
//   {
//     image: firstmount,
//     country: "Geirangerfjord",
//     view: " on google maps",
//     name: "Geirangerfjord",
//     date: "01 Oct, 2021 - 18 Nov, 2021",
//     caption:
//       "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
//   },
// ];

const Header = (props) => {
  return (
    <div className="container cont">
      <img src={props.image} alt="" className="image" />
      <div className="colum">
        <p>
          <span>
            <IoLocation />
          </span>
          {props.location} <span className="view"> {props.view} </span>
        </p>
        <h2>{props.name}</h2>
        <p>{props.date}</p>
        <p>{props.caption}</p>
      </div>
    </div>
  );
}

export default Header