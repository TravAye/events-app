import { FormEvent, useContext, useEffect, useState } from "react";
import BucketListContext from "../context/BucketListContext";
import "./BucketList.css";
import ResultList from "./ResultList";
import sadFace from "../assets/sadface.png";
import Event from "../models/Event";

const BucketList = () => {
  const { bucketList } = useContext(BucketListContext);
  const [date, setDate] = useState(false);
  const [name, setName] = useState(false);
  const [substring, setSubstring] = useState("");

  const filter = (): Event[] => {
    let filteredArray: Event[] = [...bucketList];
    if (date) {
      filteredArray = filteredArray.sort((a, b) =>
        a.dates.start.localDate > b.dates.start.localDate ? 1 : -1
      );
    }
    if (name) {
      filteredArray = filteredArray.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (substring) {
      filteredArray = filteredArray.filter(
        (event) =>
          event.name.toLowerCase().includes(substring.toLowerCase().trim()) ||
          ""
      );
    }
    return filteredArray;
  };

  const dateButton = (e: any) => {
    setDate(e.target.checked);
    setName(false);
  };

  return (
    <div className="BucketList">
      <h2>Bucket List Events</h2>

      {bucketList.length ? (
        <div>
          <form className="form">
            <p>
              Sort your Bucket List:
              <input type="radio" name="sort" id="date" onChange={dateButton} />
              <label htmlFor="date">By Date</label>
              <input
                type="radio"
                name="sort"
                id="name"
                onChange={(e) => setName(e.target.checked)}
              />
              <label htmlFor="name">By Name</label>
            </p>
            <div>
              <label htmlFor="substring">Search By Name: </label>
              <input
                type="text"
                name="substring"
                id="substring"
                onChange={(e) => setSubstring(e.target.value)}
              />
            </div>
          </form>
          <ResultList events={filter()} />
        </div>
      ) : (
        <div className="empty-bucket">
          <p className="no-events">There are no events in your bucket!</p>
          <img src={sadFace} alt="sad face" />
        </div>
      )}
    </div>
  );
};

export default BucketList;
