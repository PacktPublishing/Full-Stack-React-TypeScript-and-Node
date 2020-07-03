import React, { useContext, useRef } from 'react';
import { TestContext } from './ContextTester';

const UserNameComp = React.memo(() => {
    const renders = useRef(0);
    console.log("renders UserNameComp", renders.current++);

    const { username } = useContext(TestContext);
    console.log("username UserNameComp", username);
    
    return <div>
        {username}
    </div>
});

export default UserNameComp;