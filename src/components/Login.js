import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css";


function Login({setLoggedInUser}) {
    const [userInfo, setUserInfo] = useState({});
    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8001/users")
        .then (res=>res.json())
        .then (res => {
            let user = res[0]//.filter(user=>user.username==userInfo.username)// && user.password===userInfo.password)
            user && setLoggedInUser(user);
            nav("/bookshelf")
            // console.log(res.filter(user=>user.username==userInfo.username));
        })
        .catch (err =>console.error(err));
    }
    function handleChange(e){
        setUserInfo(prev=>({...prev,[e.target.name]:e.target.value}));
    }
    return (
        <div id="login" className="text-center m-5-auto">
            <h2 class="login"> Log in </h2>
            <br />
            <form action="/home">
                <div className='login-form-elem bg-white'>
                    <input type="text" className='form-control' name="username" placeholder= "Enter Username" required />
                    <br /> <br/>
                    <input type="password" className='form-control' name="password"  placeholder="Enter Password" required />
                    <br />
                    <button className="login" type="submit" onClick={handleSubmit}>Login</button> 
                </div>
            </form>           
                {/* Don't have an account? <Link to="/register">Create an account</Link> */}
               
        </div>

      )
}
export default Login;