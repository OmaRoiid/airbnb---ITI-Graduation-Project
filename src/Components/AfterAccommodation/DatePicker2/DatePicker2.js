import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { DateRangePicker } from "react-date-range";

const DatePicker2 = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const handleDate = () => {
    props.datestart(format(startDate, "MMM d ,YYY"));
    props.dateend(format(endDate, "MMM d ,YYY"));
  };
  handleDate();
  return <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />;
};

export default DatePicker2;
