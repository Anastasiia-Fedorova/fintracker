import React, {FormEvent, useState} from 'react';
import {TextField, FormControl, Button, } from '@mui/material';
import styles from './sign-in.module.css'

export const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {

    };

    return (
        <div className={styles.root}>
            <form className={styles.form}>
                <h3 className="form-title"> Wellcome to FinTrecker!</h3>
                <FormControl sx={{ width: '30ch', display: 'flex', gap: '1rem'}}>
                    <TextField
                        className={styles.textField}
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Please enter your email"
                    />
                    <TextField
                        className={styles.textField}
                        onChange={e => setPassword(e.currentTarget.value)}
                        value={password}
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Please enter your password"

                    />
                </FormControl>
                <Button variant='contained' color='primary' onClick={handleSubmit}>Sign In</Button>
            </form>
        </div>
    )
}
