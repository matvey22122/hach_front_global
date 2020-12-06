import React, {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {ApiContext} from "../../context/ApiState";

const container = {
    height: '100vh'
}

const Competition = () => {
    const {userLogin} = useContext(ApiContext)
    const history = useHistory()

    useEffect(() => {

        if (userLogin === '') {
            history.goBack()
        }
    })

    return (
        <div style={container}>
            <h5>OK</h5>
        </div>
    )
}

export default Competition