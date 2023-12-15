import Get from "./Get";
import {useState} from "react";
import Post from "./Post";

const Home = (props) => {
    const [post, setShowPost] = useState(false);


    return (
        <div className={"home"}>
            <button name={"post_page"} onClick={() => setShowPost(!post)}>Post</button>
            <div className={"display"}>
                <Get/>
                {post && <Post/>}
            </div>
        </div>
    )
}

export default Home;