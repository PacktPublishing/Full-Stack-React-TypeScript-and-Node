import React from "react";

interface GreetingProps {
    enteredName: string;
    message: string;
    dispatchName: React.Dispatch<any>;
    dispatchMsg: React.Dispatch<any>;
}

export default function Greeting(props: GreetingProps) {

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.dispatchName({ type: "enteredName", payload: e.target.value });
        props.dispatchMsg({ type: "message", payload: e.target.value });
      }

    return (<div>
            <input value={props.enteredName} onChange={onChangeName} />
            <div>
                {props.message}
            </div>
        </div>);    
}