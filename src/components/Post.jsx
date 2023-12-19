import { useState} from "react";
import App from "../App";

const Post = () => {
    let tmp = <></>
    const [option, setOption] = useState("airport");

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [tailNumber, setTailNumber] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [flightNumber, setFlightNumber] = useState("");
    const [cityName, setCityName] = useState("");
    const [province, setProvince] = useState("");

    const getAirportUrl = (code) => {

    }

    const postAirport = (code,name) => {
        fetch(App.backendURL + '/airport', {
            method: "POST",
            headers: App.headers,
            body: JSON.stringify({
                name: name,
                code: code
            })
        }).then(() => {
            alert("Airport Posted");
        })
    };

    const postAircraft = (type,brand,model) => {
        fetch(App.backendURL + "/aircraft", {
            method: "POST",
            headers: App.headers,
            body: JSON.stringify({
                tailnumber: tailNumber,
                brand: brand,
                model: model
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Aircraft Posted");
        });
    };

    const postPassenger = (firstName,lastName,phoneNumber) => {
        fetch(App.backendURL + "/passenger", {
            method: "POST",
            headers: App.headers,
            body: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                phone: phoneNumber
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Passenger Posted");
        });
    };

    const postCity = async (cityName,province) => {
        await fetch(App.backendURL + '/city', {
            method: "POST",
            headers: App.headers,
            body: JSON.stringify({
                cityname: cityName,
                province: province
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("City Posted");
        });
    };

    const postFlight = (origin,destination,aircraft) => {
        fetch(App.backendURL + "/flight", {
            method: "POST",
            headers: App.headers,
            body: JSON.stringify({
                flightNumber: flightNumber,
                origin: origin,
                destination: destination
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Flight Posted");
        });
    }

    const postAirline = (cityName,province) => {
        fetch(App.backendURL + '/airline', {
            method: "POST",
            headers: App.headers,
            body: JSON.stringify({
                name: cityName,
                province: province
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Airline Posted");
        });
    }

    switch (option){
        case "airport":
            tmp = (
                <>
                    <form className={"post_input"} onSubmit={(e) => {e.preventDefault(); postAirport(code, name)}} >
                        Code: <input id={"code"} type={"text"} onChange={(event_data) => setCode(event_data.target.value)}/>
                        <br/>
                        Name: <input id={"name"} type={"text"} onChange={(event_data) => setName(event_data.target.value)}/>
                        <br/>
                        <button type={"submit"} className={"post_button"} >Submit</button>
                    </form>
                </>
            );
            break;
        case "aircraft":
            tmp = (
                <>
                    <form className={"post_input"} onSubmit={(e) => {e.preventDefault();postAircraft(tailNumber,brand,model)}} >
                        Tail-number: <input type={"text"} onChange={(event_data) => setTailNumber(event_data.target.value)} />
                        <br/>
                        Brand: <input type={"text"} onChange={(event_data) => setBrand(event_data.target.value)} />
                        <br/>
                        Model: <input type={"text"} onChange={(event_data) => setModel(event_data.target.value)} />
                        <br/>
                        <button type={"submit"} className={"post_button"}>Submit</button>
                    </form>
                </>
            );
            break;
        case "passenger":
            tmp = (
                <>
                    <form className={"post_input"} onSubmit={(e) => {e.preventDefault();postPassenger(firstName, lastName, phoneNumber)}}>
                        First Name: <input type={"text"} onChange={(event_data) => setFirstName(event_data.target.value)}/>
                        <br/>
                        Last Name: <input type={"text"} onChange={(event_data) => setLastName(event_data.target.value)}/>
                        <br/>
                        Phone Number: <input type={"text"} onChange={(event_data) => setPhoneNumber(event_data.target.value)}/>
                        <br/>
                        <button type={"submit"} className={"post_button"}>Submit</button>
                    </form>
                </>
            );
            break;
        case "city":
            tmp = (
                <>
                    <form className={"post_input"} onSubmit={(e) => {e.preventDefault(); postCity(cityName,province)}} >
                        Name: <input type={"text"} onChange={(event_data) => setCityName(event_data.target.value)} />
                        <br/>
                        Province: <input type={"text"} onChange={(event_data) => setProvince(event_data.target.value)} />
                        <br/>
                        <button type={"submit"} className={"post_button"} >Submit</button>
                    </form>
                </>
            );
            break;
        case "flight":
            tmp = (
                <>
                    <h3>Flight</h3>
                    <form className={"post_input"} onSubmit={(e) => {e.preventDefault();postFlight()}}>
                        Flight number: <input type={"text"} onChange={(event_data) => setFlightNumber(event_data.target.value)} />
                        <br/>
                        Origin: <input type={"text"} onChange={(event_data) => setOrigin(event_data.target.value)} />
                        <br/>
                        Destination: <input type={"text"} onChange={(event_data) => setDestination(event_data.target.value)} />
                        <br/>
                        <button type={"submit"} className={"post_button"} >Submit</button>
                    </form>
                </>
            );
            break;
        case "airline":
            tmp = (
                <>
                    <h3>Airline</h3>
                    <form className={"post_input"} onSubmit={(e) => {e.preventDefault();postAirline(cityName,province)}}>
                        Name: <input type={"text"} onChange={(event_data) => setCityName(event_data.target.value)} />
                        <br/>
                        Province: <input type={"text"} onChange={(event_data) => setProvince(event_data.target.value)} />
                        <br/>
                        <button className={"post_button"}>Submit</button>
                    </form>
                </>
            );
            break;
        default:
            break;
    }

    return (
        <div className={"panel"}>
            <form>
                <label>Post: </label>
                <select onChange={(event) => setOption(event.target.value)}>
                    <option value={"airport"}>Airport</option>
                    <option value={"city"}>City</option>
                    <option value={"aircraft"}>Aircraft</option>
                    <option value={"flight"}>Flight</option>
                    <option value={"airline"}>Airline</option>
                    <option value={"passenger"}>Passenger</option>
                </select>
            </form>
            <div className={"content"}>
                {tmp}
            </div>
        </div>
    );
}

export default Post;