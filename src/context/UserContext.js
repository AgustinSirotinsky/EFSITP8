import React from 'react';

export const UserContext = React.createContext();

const UserProvider = (props) => {
    const [user, setUser] = React.useState('yaco');

    return <UserContext.Provider value={{user, setUser}}>{props.children}</UserContext.Provider>
}

export default UserContext;


