import React,{useEffect,useState} from "react"


    function App() {
        const [fact, setFact] = useState("");
        const fetchFact = () => {
        const url = "http://192.168.0.108:8080/Resthooper/Agenda"

        fetch(url)
        .then((response) => response.json())
        .then((data) => setFact(data.fact));
        }
        useEffect(() => {
        fetchFact()
        }, []);
        return (
        <div className="App">
        <h2>Press the button for a random cat fact!</h2>
        <hr />
        <button>Get Cat fact</button>
        <p>{fact}</p>
        </div>
        );
        }

        export default App;