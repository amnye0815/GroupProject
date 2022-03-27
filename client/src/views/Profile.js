import { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import ProfileCard from '../components/ProfileCard';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [ user, setUser ] = useState();

    useEffect(() => {
        // If user is not logged in, redirect them back to Login & Registration
        const navigate = useNavigate;
        if (!Cookies.get("usertoken")) {
            navigate("/");
        }

        // Grab user data from database
        axios.get('http://localhost:8000/api/users/thisuser', { withCredentials: true })
            .then(userData => {
                setUser(userData.data)
                console.log(userData.data);
            })
            .catch(err => console.log(err))

    }, []);

    return (
        <>
            <Navigation/>
            <ProfileCard/>
        </>
    )
}

export default Profile;