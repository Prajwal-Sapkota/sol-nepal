import Banner from "./components/Banner";
import EventsCard from "./components/EventsCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestNews from "./components/LatestNews";


export default function Home() {
  return(
    <div>
      <Header/>
      <Banner/>
      <EventsCard/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}