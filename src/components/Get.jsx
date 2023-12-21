import {useEffect, useState} from "react";
import EditOptions from "./EditOptions";
import App from "../App";

const Get = () => {
    const [dataKey, setDataKey] = useState("airport");
    let [data, setData] = useState([]);
    let tmp = [];

    const [originCode, setOriginCode] = useState(null);
    const [destinationCode, setDestinationCode] = useState(null);

    const getData = (dataKey) => {
        let url = `${App.backendURL}${dataKey}`;
        fetch(url, {
            method: "GET",
            headers: App.headers
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData(dataKey);
    }, [dataKey]);

    let switchKey = "";
    if (data._embedded !== undefined) {
        switchKey = Object.keys(data._embedded)[0];
    }

    const getOriginCode = async (airportURL) => {
        const response = await fetch(airportURL, {
            method: "GET",
            headers: App.headers
        });
        const data = await response.json();
        setOriginCode(data.code);
    }

    const getDestinationCode = async (airportURL) => {
        const response = await fetch(airportURL, {
            method: "GET",
            headers: App.headers
        });
        const data = await response.json();
        setDestinationCode(data.code);
    }


    switch (switchKey) {
        case "airport":
            let airports = data._embedded.airport
            for (let i = 0; i < airports.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div>
                            <h4>Code: {airports[i].code}</h4>
                            <h4>{airports[i].name}</h4>
                        </div>
                        <EditOptions prop={airports[i].code} switchKey={switchKey} />
                    </div>
                );
            }
            break;
        case "aircraft":
            let aircraft = data._embedded.aircraft;
            for (let i = 0; i < aircraft.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <>{aircraft[i].airlineName}</>
                        <div>
                            <h4>Tail-number: {aircraft[i].tailnumber}</h4>
                            <h4>Brand: {aircraft[i].brand}</h4>
                            <h4>Model: {aircraft[i].model}</h4>
                        </div>
                        <EditOptions prop={aircraft[i].tailnumber} switchKey={switchKey} />
                    </div>
                );
            }
            break;
        case "passenger":
            let passengers = data._embedded.passenger;
            for (let i = 0; i < passengers.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div>
                            <h4>{passengers[i].firstname} {passengers[i].lastname}</h4>
                            <h4>Phone: {passengers[i].phone}</h4>
                        </div>
                        <EditOptions hideDelete={true} prop={passengers[i].code} switchKey={switchKey} />
                    </div>
                );
            }
            break;
        case "city":
            let cities = data._embedded.city;
            for (let i = 0; i < cities.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div>
                            <h4>{cities[i].cityname}</h4>
                            <h4>{cities[i].province}</h4>
                        </div>
                        <EditOptions prop={cities[i].cityname} switchKey={switchKey} />
                    </div>
                );
            }
            break;
        case "flight":
            let flights = data._embedded.flight;
            for (let i = 0; i < flights.length; i++) {
                getOriginCode(flights[i]._links.origin.href)
                getDestinationCode(flights[i]._links.destination.href)
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div>
                            <h4>{flights[i].flightNumber}</h4>
                            <h4>Origin: {originCode} --> Destination: {destinationCode}</h4>
                        </div>
                        <EditOptions prop={flights[i].flightNumber} switchKey={switchKey} />
                    </div>
                );
            }
            break;
        case "airline":
            let airlines = data._embedded.airline;
            for (let i = 0; i < airlines.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div>
                            <h4>{airlines[i].name}</h4>
                            <h4>{airlines[i].airlineCode} -- {airlines[i].country}</h4>
                        </div>
                        <EditOptions prop={airlines[i].airlineCode} switchKey={switchKey} />
                    </div>
                );
            }
            break;
        default:
            break;
    }

    if (tmp.length === 0) {
        tmp.push(
            <div className={"content_panel"} key={0}>
                <h4>No {dataKey} Data</h4>
            </div>);
    }

    return (
        <div className={"panel_get"}>
            <div className={"get_nav"}>
                <button onClick={() => setDataKey("airport")}>Airports</button>
                <button onClick={() => setDataKey("aircraft")}>Aircraft</button>
                <button onClick={() => setDataKey("passenger")}>Passengers</button>
                <button onClick={() => setDataKey("city")}>Cities</button>
                <button onClick={() => setDataKey("flight")}>Flights</button>
                <button onClick={() => setDataKey("airline")}>Airlines</button>
            </div>
            <div className={"content"}>
                {tmp}
            </div>
        </div>
    )
};

export default Get;