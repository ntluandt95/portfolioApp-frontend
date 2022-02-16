import React, {useState} from 'react'
import authService from '../services/auth.service';
import userService from '../services/user.service';
export const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) =>{
        
        authService.login(username,password);
        console.log(authService.getCurrentUser());
        console.log(authService.getAccessToken());
        
        let projects = await userService.getProjects();
        console.log(projects.data);
        e.preventDefault();
        
    }

    return (
        <div>

            
                <label>
                    Username:
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button onClick={handleSubmit}>Submit</button>
            
        </div>
    )
}
