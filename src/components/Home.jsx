import Get from "./Get";
import {useState} from "react";
import Post from "./Post";

const Home = (props) => {
    return (
        <div className={"home"}>
            <div className={"display"}>
                <Get/>
                <Post/>
            </div>
        </div>
    )
}

export default Home;