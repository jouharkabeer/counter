import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const savedCounters = JSON.parse(localStorage.getItem("counters")) || [];
    setCounters(savedCounters);
  }, []);

  return (
    <div className="home">
        <h2>Target Counter</h2>
      <Link to="/add" className="add-btn">+</Link>
      <div className="counter-list">
        {counters.length === 0 ? <p>No counters added.</p> : 
          counters.map((counter, index) => (
            <Link key={index} to={`/counter/${index}`} className="counter-card">
              <h3>{counter.name}</h3>
              <p>Target: {counter.target}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
