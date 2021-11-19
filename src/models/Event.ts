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

export default interface Event {
  name: string;
  id: string;
  url: string;
  images: Image[];
  dates: Dates;
}
