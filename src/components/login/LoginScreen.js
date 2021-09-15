import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        // Reemplaza la última ruta, por lo tanto no queda disponible para volver a login
        // ya que la última corresponde a /login
        // history.replace('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Italo'
            }
        })
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>

        </div>
    )
}
