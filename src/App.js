import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (err) {
      console.log("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const card = {
    width : "200px",
    borderRadius : "5px",
    border : "1px solid #ccc",
    margin : "10px",
    padding : "10px",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
  }

  const imageStyle = {
    width : "100px",
    height : "100px",
  }

  const container = {
    display : "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    alignItems : "center",
  }

  return (
    <div className="App" style={container}>
      {countries.map((country) => (
        <div style={card} key={country.cca2}>
          <img src={country.flags.png} alt={country.name.common} style={imageStyle}/>
          <h1>{country.name.common}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
