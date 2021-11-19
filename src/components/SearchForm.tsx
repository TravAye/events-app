import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./SearchForm.css";

const SearchForm = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    let qsp: any = {};
    if (name) {
      qsp.name = name;
    }
    if (city) {
      qsp.city = city;
    }
    if (date) {
      qsp.date = date;
    }
    history.push(`/events/search?${new URLSearchParams(qsp)}`);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <div className="inputs">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
