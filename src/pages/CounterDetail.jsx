import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CounterDetails = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const counters = JSON.parse(localStorage.getItem("counters")) || [];
    setCounter(counters[id]);
  }, [id]);

  const updateCounter = () => {
    if (!value) return;
    const counters = JSON.parse(localStorage.getItem("counters")) || [];
    counters[id].current += Number(value);
    localStorage.setItem("counters", JSON.stringify(counters));
    setCounter(counters[id]);
    setValue("");
  };

  if (!counter) return <p>Loading...</p>;

  return (
    <div className="counter-details">
      <h2>{counter.name}</h2>
      <p>Target: {counter.target}</p>
      <p>Current: {counter.current}</p>
      <p>Remaining: {counter.target - counter.current}</p>
      <p>Description: {counter.description}</p>
      <input type="number" placeholder="Add Value" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={updateCounter}>Update</button>
    </div>
  );
};

export default CounterDetails;
