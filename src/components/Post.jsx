const Post = (props) => {
    return (
        <div className={"post"}>
            <form>
                <label>Data type:</label>
                <select>
                    <option value={"airport"}>Airport</option>
                    <option value={"city"}>City</option>
                    <option value={"aircraft"}>Aircraft</option>
                    <option value={"flight"}>Flight</option>
                    <option value={"passenger"}>Passenger</option>
                </select>
            </form>
        </div>
    );
}

export default Post;