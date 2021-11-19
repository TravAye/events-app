import Result from "./Result";
import Event from "../models/Event";
import "./ResultList.css";

interface Props {
  events: Event[];
}

const ResultList = ({ events }: Props) => {
  return (
    <div className="ResultList">
      <ul>
        {events?.map((event) => (
          <Result event={event} key={event.id} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
