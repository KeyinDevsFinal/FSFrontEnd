import Get from "./Get";
import {useState} from "react";
import Post from "./Post";

const Home = (props) => {
    const [post, setShowPost] = useState(false);


    return (
        <div className={"display"}>
            <div className={"home"}>
                <button onClick={() => setShowPost(!post)}>Post</button>
                <Get />
                {post && <Post />}
            </div>
        </div>
    )
}

export default Home;