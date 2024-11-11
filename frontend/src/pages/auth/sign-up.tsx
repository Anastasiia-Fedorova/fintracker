import React, {FormEvent, useState} from 'react';
import {TextField, FormControl, Button, } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import styles from './sign-up.module.css'
export const SignUp: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const  handleSubmit = async (e: FormEvent) => {
        // e.preventDefault()
        // let localUrl = "http://localhost:8080/v1/auth/sign-up"
        // await fetch(localUrl, {
        //     method: 'POST',
        //     credentials: "include",
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify({name,email,password,)
        //
        // }).then(() => console.log('email ==>', email, 'password ==>', password))

    };

    return (
        <div className={styles.root}>
            <form className={styles.form}>
                <h3 className="form-title">Hello! Get started with FinTracker!</h3>
                <FormControl sx={{ width: '30ch', display: 'flex', gap: '1rem'}}>
                <TextField
                    onChange={e => setName(e.currentTarget.value)}
                    value={name}
                    type="text"
                    label="Name"
                    name="Name"
                    placeholder="Please enter your Name"

                />

                <TextField
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Please enter your email"

                />
                <TextField
                    onChange={e => setPassword(e.currentTarget.value)}
                    value={password}
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Please enter your password"

                />
                </FormControl>
                <Button variant='contained' size="large" color='primary' onClick={handleSubmit}>Sign Up</Button>
                <Button variant='outlined' size="small" color='primary' onClick={() => navigate('/sign-in')}> Already have an account? Please log in </Button>
            </form>
        </div>
    )
}

