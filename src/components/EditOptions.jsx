import App from "../App";

const EditOptions = (props) => {

    const deleteItem = (prop,key) => {
        console.log(prop,key)
        switch (key) {
            case "airport":
                fetch(App.backendURL + "/airport/search/deleteByCode?code=" + prop, {
                    method: "GET",
                    headers: App.headers
                }).then(data => alert("Deleted"))
                break;
            case "aircraft":
                fetch(App.backendURL + "/aircraft/search/deleteByTailnumber?tailnumber=" + prop, {
                    method: "GET",
                    headers: App.headers,
                }).then(data => alert("Deleted"))
                break;
            case "airline":
                fetch(App.backendURL + "/airline/search/deleteByAirlineCode=" + prop, {
                    method: "GET",
                    headers: App.headers,
                }).then(data => alert("Deleted " + data.name))
                break;
            case "city":
                fetch(App.backendURL + "/city/search/deleteByCityname?cityname=" + prop, {
                    method: "GET",
                    headers: App.headers,
                }).then(data => alert("Deleted " + data.cityname))
                break;
            case "flight":
                fetch(App.backendURL + "/flight/search/deleteByFlightNumber?flightNumber=" + prop, {
                    method: "GET",
                    headers: App.headers,
                }).then(data => {alert("Deleted " + data.flightnumber);})
                break;
            default:
                break;
        }
    }

    const editItem = (prop,key) => {}


    return (
        <div className={"edit_options"}>
            {!props.hideDelete && <button onClick={() => {deleteItem(props.prop,props.switchKey)}}>Delete</button>}
            <button onClick={() => {editItem(props.prop,props.switchKey)}} >Edit</button>
        </div>
    );
};

export default EditOptions;