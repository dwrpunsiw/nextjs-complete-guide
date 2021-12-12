import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
};

export default HomePage;
