
import "./Heading.css"
const Heading =({text="hallo" })=>{

    return (
        
        <div className="heading-container">
            <h1>{text}</h1>
        </div>
    );
}

export default Heading;