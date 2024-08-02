import React from "react";
import ReactDOM from "react-dom/client";

import Form from "./res/components/Form"


const RootElement = document.getElementById("root");

const Root = ReactDOM.createRoot(RootElement);




const AppLayout =()=>{

    return(

        <>
            <Form />
        </>
    );
}

Root.render(<AppLayout />);