import {useEffect, useState} from "react";
import EditOptions from "./EditOptions";

const Get = () => {
    const [dataKey, setDataKey] = useState("airport");
    let [data, setData] = useState([]);
    let tmp = [];


    const getData = async (dataKey) => {
        let url = `http://localhost:80/${dataKey}`;
        console.log(url)

        await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa("admin" + ":" + "admin")
            }
        })
            .then((response) => {return response.json()})
            .then((data) => {
                console.log(data._embedded);
                setData(data)
            });
    }

    useEffect(() => {
        getData(dataKey);
    }, [dataKey]);


    let switchKey = "";
    if (data._embedded !== undefined) {
        switchKey = Object.keys(data._embedded)[0];
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
                        <EditOptions />
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
                            <h4>Type: {aircraft[i].type}</h4>
                            <h4>Model: {aircraft[i].model}</h4>
                        </div>
                        <EditOptions />
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
                            <h4>{passengers[i].firstName} {passengers[i].lastName}</h4>
                            <h4>Phone: {passengers[i].phoneNumber}</h4>
                        </div>
                        <EditOptions />
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
                            <h4>{cities[i].name}</h4>
                            <h4>{cities[i].province}</h4>
                        </div>
                        <EditOptions />
                    </div>
                );
            }
            break;

        case "flight":
            let flights = data._embedded.flight;
            for (let i = 0; i < flights.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div>
                            <h4>{flights[i].flightNumber}</h4>
                            <h4>{flights[i].departureTime}</h4>
                            <h4>{flights[i].arrivalTime}</h4>
                            <h4>{flights[i].status}</h4>
                        </div>
                        <EditOptions />
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
                        </div>
                        <EditOptions />
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
        <div className={"panel"}>
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