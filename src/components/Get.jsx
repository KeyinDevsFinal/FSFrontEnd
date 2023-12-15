import {useEffect, useState} from "react";
import EditOptions from "./EditOptions";

const Get = () => {
    const [dataKey, setDataKey] = useState("airport");
    let [data, setData] = useState({});
    let tmp = [];

    const getData = async (dataKey) => {
        let url = "http://localhost:80/" + dataKey;

        await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa("admin" + ":" + "admin")
            }
        }).then((response) => response.json()).then((data) => setData(data));
    }

    useEffect(() => {
        getData(dataKey)
    }, [dataKey]);


    switch (data._embedded) {
        case "airport":
            let airports = data._embedded.airport
            for (let i = 0; i < airports.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <h3>Code: {airports[i].code}</h3>
                        <div className={"flex"}>
                            <h4>{airports[i].name}</h4>
                            <EditOptions />
                        </div>
                    </div>
                );
            }
            break;

        case "aircraft":
            let aircraft = data._embedded.aircraft;
            for (let i = 0; i < aircraft.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <h3>{aircraft[i].airlineName}</h3>
                        <div className={"flex"}>
                            <h4>Type: {aircraft[i].type}</h4>
                            <h4>Model: {aircraft[i].model}</h4>
                            <EditOptions />
                        </div>
                    </div>
                );
            }
            break;

        case "passenger":
            let passengers = data._embedded.passenger;
            for (let i = 0; i < passengers.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div className={"flex"}>
                            <h3>{passengers[i].firstName} {passengers[i].lastName}</h3>
                            <h4>Phone: {passengers[i].phoneNumber}</h4>
                            <EditOptions />
                        </div>
                    </div>
                );
            }
            break;

        case "city":
            let cities = data._embedded.city;
            for (let i = 0; i < cities.length; i++) {
                tmp.push(
                    <div className={"content_panel"} key={i}>
                        <div className={"flex"}>
                            <h3>{cities[i].name}</h3>
                            <h4>{cities[i].province}</h4>
                            <EditOptions />
                        </div>
                    </div>
                );
            }
            break;
        default:
            break;
    }

    if (tmp.length === 0) {
        tmp = <h3>No {dataKey} found</h3>
    }

    return (
        <div className={"get"}>
            <div className={""}>
                <button onClick={() => setDataKey("airport")}>Airports</button>
                <button onClick={() => setDataKey("aircraft")}>Aircraft</button>
                <button onClick={() => setDataKey("passenger")}>Passengers</button>
                <button onClick={() => setDataKey("city")}>Cities</button>
            </div>
            {tmp}
        </div>
    )

};

export default Get;