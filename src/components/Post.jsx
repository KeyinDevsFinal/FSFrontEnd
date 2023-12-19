import {useEffect, useState} from "react";

const Post = () => {
    let tmp = <></>
    const [option, setOption] = useState("airports");


    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [airline, setAirline] = useState("");
    const [type, setType] = useState("");
    const [model, setModel] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [cityName, setCityName] = useState("");
    const [province, setProvince] = useState("");


    const postAirport = (code,name) => {
        fetch("http://localhost:80/airport", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: code,
                name: name
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Airport Posted");
        });
    };

    const postAircraft = (airline,type,model) => {
        fetch("http://localhost:80/aircraft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                airlineName: airline,
                type: type,
                model: model
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Aircraft Posted");
        });
    };

    const postPassenger = (firstName,lastName,phoneNumber) => {
        fetch("http://localhost:80/passenger", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Passenger Posted");
        });
    };

    const postCity = (cityName,province) => {
        fetch("http://localhost:80/city", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: cityName,
                province: province
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("City Posted");
        });
    };

    switch (option){
        case "airport":
            tmp = (
                <>
                    <h3>Airports</h3>
                    <div className={"post_input"}>

                        <div>
                            Code: <input id={"code"} type={"text"} onChange={(event_data) => setCode(event_data.target.value)}/>
                            Name: <input id={"name"} type={"text"} onChange={(event_data) => setName(event_data.target.value)}/>
                        </div>
                        <button onClick={() => postAirport(code, name)}>Submit</button>
                    </div>
                </>
            );
            break;

        case "aircraft":
            tmp = (
                <>
                    <h3>Aircraft</h3>
                    <div className={"post_input"}>

                        <div>
                            Airline: <input type={"text"} onChange={(event_data) => setAirline(event_data.target.value)} />
                            Type: <input type={"text"} onChange={(event_data) => setType(event_data.target.value)} /> <br/>
                            Model: <input type={"text"} onChange={(event_data) => setModel(event_data.target.value)} />
                        </div>
                        <button onClick={() => postAircraft(airline,type,model)}>Submit</button>
                    </div>
                </>
            );
            break;

        case "passenger":
            tmp = (
                <>
                    <h3>Passenger</h3>
                    <div className={"post_input"}>

                        <div>
                            First Name: <input type={"text"} onChange={(event_data) => setFirstName(event_data.target.value)}/>
                            Last Name: <input type={"text"} onChange={(event_data) => setLastName(event_data.target.value)}/>
                            Phone Number: <input type={"text"} onChange={(event_data) => setPhoneNumber(event_data.target.value)}/>
                        </div>
                        <button onClick={() => postPassenger(firstName, lastName, phoneNumber)}>Submit</button>
                    </div>
                </>
            );
            break;

        case "city":
            tmp = (
                <>
                    <h3>City</h3>
                    <div className={"post_input"}>
                        <div>
                            Name: <input type={"text"} onChange={(event_data) => setCityName(event_data.target.value)} />
                            Province: <input type={"text"} onChange={(event_data) => setProvince(event_data.target.value)} />
                        </div>
                        <button className={"post_button"} onClick={() => postCity(cityName,province)}>Submit</button>
                    </div>
                </>
            );
            break;

        case "flight":
            tmp = (
                <>
                    <h3>Flight</h3>
                    <div className={"post_input"}>
                        <div>
                            Name: <input type={"text"} onChange={(event_data) => setCityName(event_data.target.value)} />
                            Province: <input type={"text"} onChange={(event_data) => setProvince(event_data.target.value)} />
                        </div>
                        <button className={"post_button"} onClick={() => postCity(cityName,province)}>Submit</button>
                    </div>
                </>
            );
            break;

        case "airline":
            tmp = (
                <>
                    <h3>Airline</h3>
                    <div className={"post_input"}>
                        <div>
                            Name: <input type={"text"} onChange={(event_data) => setCityName(event_data.target.value)} />
                            Province: <input type={"text"} onChange={(event_data) => setProvince(event_data.target.value)} />
                        </div>
                        <button className={"post_button"} onClick={() => postCity(cityName,province)}>Submit</button>
                    </div>
                </>
            );
            break;

    }

    return (
        <div className={"panel"}>
            <form>
                <label>Data type:</label>
                <select onChange={(event) => setOption(event.target.value)}>
                    <option value={"airport"}>Airport</option>
                    <option value={"city"}>City</option>
                    <option value={"aircraft"}>Aircraft</option>
                    <option value={"flight"}>Flight</option>
                    <option value={"airline"}>Airline</option>
                    <option value={"passenger"}>Passenger</option>
                </select>
                <div className={"content"}>
                    {tmp}
                </div>
            </form>
        </div>
    );
}

export default Post;