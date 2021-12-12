import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const searchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
