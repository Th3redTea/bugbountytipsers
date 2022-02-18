import React, {useContext} from 'react'
import  styles from '../styles/Home/LoginSignup.module.scss'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { LoginContext } from '../pages';


export function LoginForm(){

    const {isLogin, setIsLogin} = useContext(LoginContext)

    return(

        <div className={styles.container}>

        <div className={styles.login}>
            <button className={styles.close} onClick={() => setIsLogin(null)}>
                <Icon icon="bi:x-lg" width="32"  />
            </button>
            <h1>
            Sign-in
            </h1>
            <form>
                <label>Email</label>
                <input type='email' placeholder='example@domain.com' tabIndex="1"/>
                <label>Password</label>
                <input type='password' placeholder='Password' tabIndex="2"/>
            <Link href="forgetpassword">Forget password?</Link>
            <button className={styles.loginButton} >Sign-in</button>
            </form>
            <Link className={styles.linkToRegister} href="register" passHref>Don&apos;t have an account? Login!</Link>
        </div>
        </div>
       
    )
}


export function RegisterForm(){

    const {isLogin, setIsLogin} = useContext(LoginContext)

    return(
        <div className={styles.container}>

        <div className={styles.register}>

             <Icon icon="bi:x-lg" width="32" className={styles.close} onClick={() =>  setIsLogin(null) } />
             <h1>
            Sign-up
            </h1>
            <form>
                <label>Name</label>
                <input  name="name" type='text' placeholder='Your name' tabIndex="1"/>
                <label>email</label>
                <input  name="email" type='email' placeholder='Your name' tabIndex="1"/>
                <label>Password</label>
                <input  name="password1" type='password' placeholder='Password' tabIndex="2"/>
                <label>Confirm Password</label>
                <input  name="password2" type='password' placeholder='Password' tabIndex="2"/>
                <div className={styles.checkbox}>
                    <input className={styles.terms} type="checkbox"  />
                    <label>I Agree to terms of service</label>
                </div>
            <div className={styles.buttons}>
            <button className={styles.loginButton} >Sign-up</button>
                <h1>Or with</h1>
                <div className={styles.socialauth}>
                    <Icon icon="flat-color-icons:google" width="32" />
                    <Icon icon="logos:github-icon" width="32" />
                </div>
            </div>
            </form>

            </div>
        </div>
    )
}

