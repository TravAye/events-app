import Event from "../models/Event";

interface Embedded {
  events: Event[];
}

export default interface EventResponse {
  _embedded: Embedded;
}
