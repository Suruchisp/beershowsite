import React, {useState,useEffect} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [beers,setbeers]=useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{
    axios
    .get("https://api.sampleapis.com/beers/ale")
    .then((response)=> setbeers(response.data))
    .catch((error)=>console.error(error));
  },[]);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer Cards</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="beer-cards">
        {filteredBeers.map((beer) => (
          <div className="beer-card" key={beer.id}>
            <img src={beer.image} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.price || "Price not available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
