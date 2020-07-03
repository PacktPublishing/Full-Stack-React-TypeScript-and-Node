import React, { useContext } from 'react';
import { TestContext } from './ContextTester';

const UserAgeComp = () => {
    const { userage } = useContext(TestContext);
    
    return <div>
        {userage}
    </div>
};

export default UserAgeComp;