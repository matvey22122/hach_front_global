import React, {useContext} from 'react'
import {Button, Form, Input} from "antd";
import {ApiContext} from "../../context/ApiState";
import {useHistory} from 'react-router-dom'

const container = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f1fdff'
}

const layout = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
};

const Login = () => {
    const {logIn} = useContext(ApiContext)
    const history = useHistory()

    const submit = async (user) => {
        try {
            if (logIn(user)) {
                history.push('/competition')
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div style={container}>
            <Form style={layout}
                  onFinish={submit}
            >
                <Form.Item label={'Логин'}
                           name="login"
                           rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Пароль"
                           name="password"
                           rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item style={{margin: '0 auto'}}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login