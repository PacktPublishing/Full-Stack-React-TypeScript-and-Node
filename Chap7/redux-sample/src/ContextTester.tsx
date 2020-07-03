import React, { createContext, useState } from 'react';
import UserNameComp from './UserNameComp';
import UserAgeComp from './UserAgeComp';

export const TestContext = createContext<{ username: string, userage: number }>({ username: "", userage:0 });

const ContextTester = () => {
    const [contextState, setContextState] = useState({ username: "dave", userage:22 });

    const onClick = () => {
        setContextState({
            username: contextState.username,
            userage: contextState.userage + 1
        });
    }

    return (<React.Fragment>
        <button onClick={onClick}>Update age</button>
    <TestContext.Provider value={contextState}>
        <UserNameComp />
        <br/>
        <UserAgeComp />
    </TestContext.Provider>
    </React.Fragment>);

}

export default ContextTester;