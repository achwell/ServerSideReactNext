import {createContext, useReducer} from 'react'

export const AppContext = createContext({
    users: null,
    addUser: function (user) {}
})

export const AppContextProvider = (props) => {
    const [users, dispatch] = useReducer((state, action) => [...state, ...action], [{name: 'Francis'}, {name: 'Mike'}])

    const handleAddUser = (user) => {
        dispatch([user])
    }

    return (
        <AppContext.Provider value={{users: users, addUser: handleAddUser}}>
            {props.children}
        </AppContext.Provider>
    )

}