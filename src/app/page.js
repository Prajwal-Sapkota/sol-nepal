import Banner from "./components/Banner";
import EventsCard from "./components/EventsCard";
import LatestNews from "./components/LatestNews";


export default function Home() {
  return(
    <div>
      <Banner/>
      <EventsCard/>
      <LatestNews/>
    </div>
  )
}