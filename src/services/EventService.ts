import axios from "axios";
import EventResponse from "../models/EventResponse";
import SingleEventResponse from "../models/SingleEventResponse";

const key = process.env.REACT_APP_EVENT_KEY || "";

export const getLocalEvents = (location: string): Promise<EventResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events", {
      params: {
        apikey: key,
        geoPoint: location,
      },
    })
    .then((response) => {
      return response.data;
    });
};

//get event details

export const getEventDetails = (id: string): Promise<SingleEventResponse> => {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events/${encodeURIComponent(
        id
      )}`,
      {
        params: {
          apikey: key,
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};

// search events
export const filterEvents = (qsp: any): Promise<EventResponse> => {
  let params: any = {
    apikey: key,
  };
  if (qsp.name) {
    params.keyword = qsp.name;
  }
  if (qsp.city) {
    params.city = qsp.city;
  }
  if (qsp.date) {
    params.startDateTime = `${qsp.date}T14:00:00Z`;
  }
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events", {
      params,
    })
    .then((response) => {
      return response.data;
    });
};
