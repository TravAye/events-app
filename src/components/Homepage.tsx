import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Event from "../models/Event";
import { filterEvents, getLocalEvents } from "../services/EventService";
import FourOhFour from "./FourOhFour";
import "./Homepage.css";
import Popup from "./Popup";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Homepage = () => {
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  const name: string | null = new URLSearchParams(useLocation().search).get(
    "name"
  );

  const city: string | null = new URLSearchParams(useLocation().search).get(
    "city"
  );

  const date: string | null = new URLSearchParams(useLocation().search).get(
    "date"
  );

  useEffect(() => {
    if (!name && !city && !date) {
      navigator.geolocation.getCurrentPosition((response) => {
        const coords = `${response.coords.latitude},${response.coords.longitude}`;
        setLocation(coords);
        getLocalEvents(coords).then((response) => {
          setEvents(response._embedded.events);
        });
      });
    } else {
      filterEvents({ name, city, date }).then((response) => {
        if (response._embedded) {
          setEvents(response._embedded.events);
        } else {
          // alert("No search results - please try a different query.");
          setEvents([]);
        }
      });
    }
  }, [name, city, date]);

  return (
    <div className="Homepage">
      {events.length === 0 ? (
        <Popup />
      ) : (
        <>
          <SearchForm />
          {!name && !city && !date ? (
            <h2>Events in your area: </h2>
          ) : (
            <h2>Search Results: </h2>
          )}
          <ResultList events={events} />
        </>
      )}
    </div>
  );
};

export default Homepage;
