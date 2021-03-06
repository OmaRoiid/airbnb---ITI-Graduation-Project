import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";



const HeaderCenter = props => {
  const [showSearch, setShowSearch] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const clickHandler = () => {
    setShowSearch(!showSearch);
    props.show(!showSearch);
    console.log(props.show);
  };
  const locationHandler = e => {
    setLocation(e.target.value);
  };
  const guestsHandler = e => {
    setGuests(e.target.value);
  };
    const history = useHistory();

  const openSearchResults = () => {
    props.history.push("/search_results");
 console.log('hi');}
  return (
    <>
      <div className="header2__center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 align-items-center">
        <p>Places to stay</p>
        <hr />

        <div className="header2__center__search">
          <input
            type="text"
            placeholder="Where are you going?"
            name="location"
            value={location}
            onChange={locationHandler}
          />
          <input
            type="text"
            placeholder="Add dates"
            name="check in"
            onClick={clickHandler}
            value={props.startValue}
          />
          <input
            type="text"
            placeholder="Add dates"
            name="check out"
            onClick={clickHandler}
            value={props.endValue}
          />
          <input
            type="text"
            placeholder="Add guests"
            name="guests"
            value={guests}
            onChange={guestsHandler}
          />
          <Link to="/search_results" >
            <SearchIcon className="header2__center__search__searchIcon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(HeaderCenter);
