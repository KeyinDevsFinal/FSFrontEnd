const Get = (props) => {
    let tmp = [];

    tmp.push(
        <div className={"data"}>
            <text>
                Code: YYT <br/>
                Name: St. John's International Airport <br/>
            </text>
        </div>
    )

    return (
        <div className={"get"}>
            {tmp}
        </div>
    )

};

export default Get;