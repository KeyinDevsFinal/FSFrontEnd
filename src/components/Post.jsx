import {useState} from "react";

const Post = (props) => {
    let tmp = <></>
    const [option, setOption] = useState("airports");


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
        case "airports":
            tmp = (
                <div className={"content_panel"}>
                    <h3>Airports</h3>
                    Code: <input id={"code"} type={"text"} onChange={(event_data) => setCode(event_data.target.value)}/>
                    Name: <input id={"name"} type={"text"} onChange={(event_data) => setName(event_data.target.value)} />
                    <button onClick={() => postAirport(code,name)}>Submit</button>
                </div>
            );
            break;
        case "aircraft":
            tmp = (
                <div className={"content_panel"}>
                    <h3>Aircraft</h3>
                    Airline: <input type={"text"} onChange={(event_data) => setAirline(event_data.target.value)} />
                    Type: <input type={"text"} onChange={(event_data) => setType(event_data.target.value)} /> <br/>
                    Model: <input type={"text"} onChange={(event_data) => setModel(event_data.target.value)} />
                    <button onClick={() => postAircraft(airline,type,model)}>Submit</button>
                </div>
            );
            break;
        case "passengers":
            tmp = (
                <div className={"content_panel"}>
                    <h3>Passenger</h3>
                    First Name: <input type={"text"} onChange={(event_data) => setFirstName(event_data.target.value)}/>
                    Last Name: <input type={"text"} onChange={(event_data) => setLastName(event_data.target.value)}/> <br/>
                    Phone Number: <input type={"text"} onChange={(event_data) => setPhoneNumber(event_data.target.value)} />
                    <button onClick={() => postPassenger(firstName,lastName,phoneNumber)}>Submit</button>
                </div>
            );
            break;
        case "cities":
            tmp = (
                <div className={"content_panel"}>
                    <h3>Cities</h3>
                    Name: <input type={"text"} onChange={(event_data) => setCityName(event_data.target.value)} />
                    Province: <input type={"text"} onChange={(event_data) => setProvince(event_data.target.value)} />
                    <button onClick={() => postCity(cityName,province)}>Submit</button>
                </div>
            );
    }


    return (
        <div className={"post"}>
            <form>
                <label>Data type:</label>
                <select>
                    <option value={"airport"} onChange={setOption("airport")}>Airport</option>
                    <option value={"city"} onChange={setOption("city")}>City</option>
                    <option value={"aircraft"} onChange={setOption("aircraft")}>Aircraft</option>
                    <option value={"flight"} onChange={setOption("flight")}>Flight</option>
                    <option value={"passenger"} onChange={setOption("passenger")}>Passenger</option>
                    {tmp}
                </select>
            </form>
        </div>
    );
}

export default Post;