import React from "react";
import { useState, useRef } from "react";

const LOG_IN_URL = 'http://localhost:5000/api/users/signup'
const LogIn = () => {

    const userEmailRef = useRef()
    const userPasswordRef = useRef()
    const signUpUser= async (e)=>{
        e.preventDefault()
        const userEmail = userEmailRef.current.value
        const userpassword = userPasswordRef.current.value
        console.log(userEmail,userpassword)
        const formData = new FormData()
        const response = await fetch(LOG_IN_URL,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            method:"POST",
            body:new URLSearchParams({
                'userEmail':userEmail,
                'userPassword':userpassword
            })
        })

        if(response.status == 200){
            alert("LOGGED IN")
        }
        else{
            alert("Wrong emailid or password")
        }
    }


    return (
        <div className="flex justify-center content-center h-screen items-center bg-white">
            <div className="flex border-2 border-gray-100 items-center justify-center p-52 shadow-md z-10  bg-white">
                <form className="border-2 border-green-300 p-10 z-10" onSubmit={logInUser}>
                    <div className=" flex justify-center text-2xl font-medium text-green-300"> Login </div>
                    <div className="p-5">
                        <label className="p-5 text-2xl">
                            Email Id
                        </label>
                        <input className="border-yellow-400  bg-gray-50 border-10 h-10 text-2xl" type="text" placeholder="abc@gmail.com" ref={userEmailRef} />
                    </div>
                    <div className="p-5">
                        <label className=" p-5 text-2xl ">
                            Password
                        </label>
                        <input className="border-yellow-400 bg-gray-50 h-10 text-2xl" type="password" placeholder="Password" ref={userPasswordRef}/>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-500 rounded-full p-2 text-white text-2xl px-5 text-center" type="submit"> LogIn </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
export default LogIn;