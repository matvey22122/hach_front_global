import React, {useState} from 'react'
import {ApiContext} from "./ApiState";
import axios from "axios";

export const ApiState = ({children}) => {
    const [userLogin, setUserLogin] = useState('')

    const logIn = async (user) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, (user))

            if (res.status === 200) {
                setUserLogin(user.login)

                return true
            }
            return false
        } catch (e) {
            return false
        }
    }

    return (
        <ApiContext.Provider value={{logIn, userLogin}}>
            {children}
        </ApiContext.Provider>
    )
}