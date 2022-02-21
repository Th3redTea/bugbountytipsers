import React, {useContext, useRef, useState} from 'react'
import  styles from '../styles/Home/LoginSignup.module.scss'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { LoginContext } from '../pages';
import { loginSchema, registerSchema } from '../validations/loginValidation';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';


export function LoginForm(){

    const {isLogin, setIsLogin} = useContext(LoginContext)

    const initValues = {
        email: '',
        password: '',

    }

    const handleSubmit = async (values) => {

        console.log(values)
    }

    return(

        <div className={styles.container}>

        <div className={styles.login}>
            <button className={styles.close} onClick={() => setIsLogin(null)}>
                <Icon icon="bi:x-lg" width="32"  />
            </button>
            <h1>
            Sign-in
            </h1>
            <Formik
            initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
            >

            <Form className={styles.loginForm} onSubmit={handleSubmit}>

                <div>
                <label>Email</label>
                <Field id='email'
                name="email" 
                type='email' 
                placeholder='exmaple@domain.com' tabIndex="1"/>
                <ErrorMessage component='span' name='email' />
                </div>

                <div>

                <label>Password</label>
                <Field 
                    type='password' 
                    name="password"
                    placeholder='Password' 
                    tabIndex="2"/>
                <ErrorMessage component='span' name='password' />
                    </div>
            <Link href="forgetpassword">Forget password?</Link>
            <button  type="submit" className={styles.loginButton} >Sign-in</button>
            </Form>
                </Formik>
            <Link className={styles.linkToRegister} href="register" passHref>Don&apos;t have an account? Login!</Link>
        </div>
        </div>
       
    )
}


export function RegisterForm(){

    const {isLogin, setIsLogin} = useContext(LoginContext) //maintain the close button


    const initValues = {
        name: '',
        email: '',
        password1: '',
        password2: '',
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    return(
        <div className={styles.container}>

        <div className={styles.register}>

             <Icon icon="bi:x-lg" width="32" className={styles.close} onClick={() =>  setIsLogin(null) } />
             <h1>
            Sign-up
            </h1>
            <Formik
            validationSchema={registerSchema}
            initialValues={initValues}
            onSubmit={handleSubmit}
            >

            <Form className={styles.registerForm}>
                <div>
                <label>Name</label>
                <Field  name="name" type='text' placeholder='Your name' tabIndex="1"/>
                <ErrorMessage  
                name='name' 
                component='span' 
                />
                </div>

                <div>
                <label>email</label>
                <Field  name="email" type='email' placeholder='Your name' tabIndex="2" />
                <ErrorMessage 
                component='span' 
                name="email"
                />
                </div>

                <div>
                <label>Password</label>
                <Field  name="password1" type='password' placeholder='Password' tabIndex="3"/>
                <ErrorMessage 
                component='span' 
                name="password1" 
                />
                </div>

                <div>
                <label>Confirm Password</label>
                <Field  name="password2" type='password' placeholder='Password' tabIndex="4" />
                <ErrorMessage 
                component='span' 
                name="password2" 
                />    
                </div>

                <div className={styles.checkbox}>
                    <input className={styles.terms} type="checkbox"  />
                    <label>I Agree to terms of service</label>
                </div>
            <div className={styles.buttons}>
            <button  type="submit" className={styles.loginButton} >Sign-up</button>
                <h1>Or with</h1>
                <div className={styles.socialauth}>
                    <Icon icon="flat-color-icons:google" width="32" />
                    <Icon icon="logos:github-icon" width="32" />
                </div>
            </div>
            </Form>
            </Formik>

            </div>
        </div>
    )
}

