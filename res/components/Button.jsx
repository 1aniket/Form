import "./Button.css"
import { IoIosSend } from "react-icons/io";

const Button = ({text})=>{


    const handleClick=()=>{

        alert("clicked");
    }

    return(

       <div className="button-container" >

        <button className="btn" type="submit" >
        <IoIosSend />{text}
        </button>

       </div>
    );
}

export default Button;