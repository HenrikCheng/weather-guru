import { useState, useEffect } from "react";

const useWeekday = (initialDate) => {
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
    const dayIndex = initialDate.getDay();

    setWeekday(daysOfWeek[dayIndex]);
  }, [initialDate]);

  return weekday;
};

// Usage
function App() {
  const today = new Date();
  const weekday = useWeekday(today);

  return weekday;
}

export default App;
