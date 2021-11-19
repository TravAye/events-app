interface Image {
  url: string;
}

interface StartDates {
  localDate: string;
  localTime: string;
}

interface Dates {
  start: StartDates;
}

interface City {
  name: string;
}

interface State {
  stateCode: string;
}

interface Address {
  line1: string;
}

interface Venue {
  name: string;
  city: City;
  state: State;
  address: Address;
}

interface Embedded {
  venues: Venue[];
}

interface Price {
  min: number;
  max: number;
}

export default interface SingleEventResponse {
  name: string;
  id: string;
  url: string;
  images: Image[];
  dates: Dates;
  _embedded: Embedded;
  info: string;
  pleaseNote: string;
  priceRanges: Price[];
}
