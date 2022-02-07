import React, {useRef} from 'react';
import classes from './Login.module.css'

import {useDispatch, useSelector} from "react-redux";
import {postUser, setEmail, setPassword} from "../store/authSlice";


function Login({submitHandlerr, succes, navigate}){

    const dispatch = useDispatch();
    const isLoggenin = (localStorage.getItem('token') === 'undefined' ||  localStorage.getItem('token') === null)

    const submitHandler = (event) => {
        event.preventDefault();
        const email = $email.current.value;
        const password = $password.current.value;
        dispatch(postUser({email, password}))
    }

    const $email = useRef(null)
    const $password = useRef(null)
    return (

        <div className={classes.column}>
            {isLoggenin ? (
                <section>
                    <form action="" onSubmit={submitHandler}>
                        <h3>Авторизация</h3>
                        <div className={classes.qwe}>
                            <p>Email
                                <input className={classes.input}
                                       type='email'
                                       name='email'
                                       ref={$email}
                                />

                            </p>
                        </div>
                        <div className={classes.qwe}>
                            <p>Password
                                <input className={classes.input}
                                       name='password'
                                       type='password'
                                       ref={$password}/>
                            </p>

                        </div>
                        <button type='submit' className={classes.button}> Войти</button>
                    </form>
                </section>
            ) : (
                <section>
                    <div>
                        <form action="" onSubmit={submitHandlerr}>
                            <p>Вы авторизовались</p>
                            <button type='submit' className={classes.button}> Выйти</button>
                        </form>
                    </div>
                </section>


            )}
        </div>


    );

}


export default Login;