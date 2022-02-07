import React, {useEffect, useState} from "react";
import Login from "./components/auth/Login";
import {Route, Routes, Link, } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Getuser} from "./components/auth/Getuser";
import classes from "./App.module.css";
import { useNavigate } from "react-router-dom";

function App(){

    const navigate = useNavigate();
    const submitHandlerr = () => {
        localStorage.removeItem('token')
        return navigate('/')
    }

    return (

            <div className="App">

                <div className={classes.head}>
                    <Link className={classes.head} to='/'>Login</Link>
                    {localStorage.getItem('token') === 'undefined'||  localStorage.getItem('token') === null  ?('')
                        :(<Link className={classes.head} to='/profile'>Profile</Link>)  }

                </div>
                <div className='Appp'>
                <Routes>
                    <Route path='/' element={
                        <Login
                            submitHandlerr={submitHandlerr}
                        />

                    }/>

                            <Route path='/profile' element={<Getuser
                    />}/>)

                </Routes>
                </div>
            </div>


    );


}
export default App