import React, {useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {ApiContext} from "../../context/ApiState";
import {Button} from "antd";
import axios from "axios";

const container = {
    height: '100vh'
}

const Competition = () => {
    const {userLogin} = useContext(ApiContext)
    const history = useHistory()

    // useEffect(() => {
    //
    //     if (userLogin === '') {
    //         history.goBack()
    //     }
    // })

  const down = async () => {
      const res = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/secretary/download`)
    const v = window.open("about:blank", "", "_blank");
      v.document.write(res.data)
  }

  const start = async () => {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/secretary/start_competition`)
  }

    return (
        <div style={container}>
            <Button onClick={() => down()}>Загрузить срезультаты соревнования</Button>
        </div>
    )
}

export default Competition
