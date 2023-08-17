import { useState, useEffect } from "react";

const useWeekday = (initialDate, offset = 0) => {
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = (initialDate.getDay() + offset) % 7;

    setWeekday(daysOfWeek[dayIndex]);
  }, [initialDate, offset]);

  return weekday;
};

export default useWeekday;
