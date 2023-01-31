import React from "react";

interface GreetingProps {
    message: string
}

export default function Greeting(props: GreetingProps) {
    console.log("rendering Greeting")

    return (<div>
            {props.message}
        </div>);    
}