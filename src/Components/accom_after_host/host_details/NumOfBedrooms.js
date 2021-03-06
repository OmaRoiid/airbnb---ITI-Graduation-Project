import React from "react";
import Select from "@material-ui/core/Select";

function NumOfBedrooms({ register, counter }) {
  return (
    <>
      <span>How many bedrooms can guests use?</span>
      <br />
      <Select
        native
        inputProps={{
          name: "numbers_bedroom",
          ref: register({ required: true }),
        }}
        style={{ width: "100%", padding: "1rem" }}
      >
        <option aria-label="None" value="" />
        {counter.map((bedroom, i) => (
          <option key={i} value={`${bedroom}`}>{`${bedroom} bedroom`}</option>
        ))}
      </Select>
    </>
  );
}

export default NumOfBedrooms;
