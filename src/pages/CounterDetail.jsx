import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const CounterDetails = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(null);
  const [value, setValue] = useState("");
  const navigate = useNavigate()
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

  const singleUpdate = () => {
    const counters = JSON.parse(localStorage.getItem("counters")) || [];
    counters[id].current += 1;
    localStorage.setItem("counters", JSON.stringify(counters));
    setCounter(counters[id]);
  };

  const DeleteCounter = () => {
    const counters = JSON.parse(localStorage.getItem("counters")) || [];
    const updatedCounters = counters.filter((_, index) => index !== Number(id));
    localStorage.setItem("counters", JSON.stringify(updatedCounters));
    navigate("/");
  };

  if (!counter) return <p>Loading...</p>;

  return (
    <div className="counter-details">
      <h2>{counter.name}</h2>
      <p>Target: {counter.target}</p>
      <p>Current: {counter.current}</p>
      <p>Remaining: {counter.target - counter.current}</p>
      <p>Description: {counter.description}</p>
      <div className="flexalign">
        <input type="number" placeholder="Add Value" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={updateCounter}>Update</button>
      </div>
      <button className="delete-btn" onClick={DeleteCounter}>Delete counter</button> <br/>
      <button className="counter-button" onClick={singleUpdate}>+</button>
    </div>
  );
};

export default CounterDetails;
