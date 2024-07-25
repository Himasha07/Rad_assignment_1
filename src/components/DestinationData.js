const DestinationData = (props) => {
    return(
        <>
            <div className={props.classname}>
                <div className="desText">
                    <h2>{props.heading}</h2>
                    <p>{props.text} </p>
                </div>
                <div className="des1img">
                    <img src = {props.img1}></img>
                    <img src={props.img2}></img>
                </div>
            </div>
        </>
    )
}
export default DestinationData;