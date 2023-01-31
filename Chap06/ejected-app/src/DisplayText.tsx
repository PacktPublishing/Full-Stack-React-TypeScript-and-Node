import React, { useState, FC } from "react";
import UserTodos from "./UserTodos";

interface DisplayTextProps {
    getUserFullname: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullname }) => {
    const [txt, setTxt] = useState("");
    const [msg, setMsg] = useState("");
    const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>();
    
    const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value);
    }

    const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setTodoControl(null);
        setMsg(`Welcome to React testing, ${await getUserFullname(txt)}`);    
        setTodoControl(<UserTodos username={txt} />);
    }   

    return (
        <form>
            <div>
                <label>Enter your name</label>
            </div>
            <div>
                <input data-testid="user-input" value={txt} onChange={onChangeTxt} />
            </div>
            <div>
                <button data-testid="input-submit" onClick={onClickShowMsg}>Show Message</button>
            </div>
            <div>
                <label data-testid="final-msg" >{msg}</label>
            </div>    
            {todoControl}
        </form>
    )
}

export default DisplayText;