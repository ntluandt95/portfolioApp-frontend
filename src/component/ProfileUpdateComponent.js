import React, { useState, useEffect } from 'react'
import authService from '../services/auth.service'
import userService from '../services/user.service';
import developerService from '../services/developer.service';
export const ProfileUpdateComponent = () => {
    const [username, setUsername] = useState(authService.getCurrentUsername())
    var [user, setUser] = useState(userService.getUserByUsername(username))
    var [dev, setDev] = useState(developerService.getDevelopersByUsername(username))


    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [intro, setIntro] = useState('')
    useEffect(() => {
        fetch();

    }, []);

    const fetch = async () => {
        setUsername(authService.getCurrentUsername())

        const response = await userService.getUserByUsername(username);
        user = response.data;

        setUser(user)

        const responseDev = await developerService.getDevelopersByUsername(username);
        dev = responseDev.data
        setDev(dev)


        await setFirst(user.firstName)
        await setLast(user.lastName)
        await setPhone(user.phoneNumber)
        await setEmail(user.email)
        await setIntro(dev.introduction)

    }

    const handleSubmit = () => {
        user.firstName = first;
        user.lastName = last;
        user.phoneNumber = phone;
        user.email = email;
        dev.introduction = intro;

        userService.putUser(user);
        userService.putDeveloper(dev);

        alert("Change saved")
    }
    return (
        <>
            <h3>Profile Update</h3>
            <table class="table borderless" style={{ backgroundColor: 'white' }}>

                <tbody>

                    <tr>
                        <td>
                            <b>First Name:</b>
                        </td>
                        <td>
                            <input className='form-control' value={first} type="text" name="" id="" onChange={(e) => { setFirst(e.target.value) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Last Name:</b>
                        </td>
                        <td>
                            <input className='form-control' value={last} type="text" name="" id="" onChange={(e) => { setLast(e.target.value) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Phone Number:</b>
                        </td>
                        <td>
                            <input className='form-control' value={phone} type="phone" name="" id="" onChange={(e) => { setPhone(e.target.value) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Email:</b>
                        </td>
                        <td>
                            <input className='form-control' value={email} type="text" name="" id="" onChange={(e) => { setEmail(e.target.value) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Introduction:</b>
                        </td>
                        <td>
                            <textarea className='form-control' type="text" name="" id="" value={intro} onChange={(e) => { setIntro(e.target.value) }}></textarea>
                        </td>

                    </tr>
                    <tr>

                        <td colspan="2">
                            <button className='btn btn-primary' onClick={handleSubmit}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </>
    )
}
