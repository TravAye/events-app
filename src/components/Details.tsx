import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";

import SingleEventResponse from "../models/SingleEventResponse";
import { getEventDetails } from "../services/EventService";
import "./Details.css";

interface RouteParams {
  id: string;
}

const Details = () => {
  const [event, setEvent] = useState<SingleEventResponse>();
  const id = useParams<RouteParams>().id;
  let history = useHistory();
  useEffect(() => {
    getEventDetails(id).then((response) => {
      setEvent(response);
    });
  }, [id]);

  let time: string | undefined = event?.dates.start.localTime;
  if (time) {
    let splitTime = time.split(":");
    let hours = parseInt(splitTime[0]);
    let minutes = splitTime[1];
    if (hours > 12) {
      hours = hours - 12;
      time = `${hours}:${minutes} PM`;
    } else {
      time = `${hours}:${minutes} AM`;
    }
  }

  return (
    <div className="Details">
      <h2>Details of {event?.name}</h2>
      <div className="content">
        <img src={event?.images[0].url} alt="" />
        <div className="info">
          <p>
            <span>Date:</span> {event?.dates.start.localDate}
          </p>
          <p>
            <span>Time:</span> {time}
          </p>
          <p>
            <span>Price Range:</span>{" "}
            {event?.priceRanges
              ? `$${event?.priceRanges[0].min} - $${event?.priceRanges[0].max}`
              : "TBD"}
          </p>
          {event?._embedded ? (
            <div>
              <p>{event?._embedded.venues[0].name}</p>
              <p>
                {event?._embedded.venues[0].address.line1},{" "}
                {event?._embedded.venues[0].city.name}
                {event?._embedded.venues[0].state
                  ? `, ${event?._embedded.venues[0].state.stateCode}`
                  : ""}
              </p>
            </div>
          ) : (
            <p>Venue: TBD</p>
          )}
        </div>
      </div>
      <p>{event?.info}</p>
      <p>{event?.pleaseNote}</p>
      <a href={event?.url!} className="ticketmaster">
        <p>See event on TicketMaster</p>
      </a>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default Details;
