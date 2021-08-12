import React, { useContext, useState } from 'react';

export const StateContext = React.createContext();

// react hook
export function useStateContext() {
    return useContext(StateContext)
}

export function HBOProvider({ children }) {
    const [user, setUser] = useState('')
    const defaultUserImg = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50'
    const createUserAction = (e) => {
        setUser(e.target.value)
        console.log(user);
    }

    return (

        <StateContext.Provider
            value={{
                user,
                createUserAction
            }}
        >
            {children}
        </StateContext.Provider>
    )
}