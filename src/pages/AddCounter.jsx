import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCounter = () => {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCounter = { name, target: Number(target), current: 0, description };
    const existingCounters = JSON.parse(localStorage.getItem("counters")) || [];
    localStorage.setItem("counters", JSON.stringify([...existingCounters, newCounter]));
    navigate("/");
  };

  return (
    <div className="add-counter">
      <h2>Add Counter</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Target Count" required value={target} onChange={(e) => setTarget(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add Counter</button>
      </form>
    </div>
  );
};

export default AddCounter;
