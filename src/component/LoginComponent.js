import React, {useState} from 'react'
import authService from '../services/auth.service';
export const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) =>{
        console.log(username,password);
        authService.login(username,password);
        console.log(authService.getCurrentUser());
        e.preventDefault();
        
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
