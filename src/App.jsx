import "./App.css";
import Header from "./assets/Components/Header/Header";
import Navbar from "./assets/Components/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Header
        image="./../public/Images/Rectangle 77.png"
        location="JAPAN"
        name="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        caption="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        view="View on Google Maps"
      />
      <Header
        image="./../public/Images/Rectangle 78.png"
        location="Australia"
        name="Sydney Opera House"
        date="27 May, 2021 - 8 Jun, 2021"
        caption="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
        view="View on Google Maps"
      />
      <Header
        image="./../public/Images/Rectangle 84.png"
        location="NORWAY"
        name="Geirangerfjord"
        date="01 Oct, 2021 - 18 Nov, 2021"
        caption="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality"
        view="View on Google Maps"
      />
    </>
  );
}

export default App;
