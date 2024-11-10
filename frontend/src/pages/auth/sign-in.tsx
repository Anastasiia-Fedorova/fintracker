import React, {FormEvent, useState} from 'react';
import { Button, Search, Input, } from '../../ui-kit';

export const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const  handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        let localUrl = "http://localhost:8080/v1/auth/sign-in"
        await fetch(localUrl, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email,password})

        }).then(() => console.log('email ==>', email, 'password ==>', password))

    };

// http://localhost:8080/v1/auth/sign-in

    return (
        <div className="page-center">
            <form>
                <h3 className="form-title">Login Form</h3>
                <Input
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Please enter your email"

                />
                <p>Текущее значение: {email}</p>
                <Input
                    onChange={e => setPassword(e.currentTarget.value)}
                    value={password}
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Please enter your password"

                />
                <Button onClick={handleSubmit} >Button</Button>
            </form>
        </div>
    )
}

