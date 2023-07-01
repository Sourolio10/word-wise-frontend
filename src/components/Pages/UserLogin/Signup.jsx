import React from "react";
import { useState, useRef } from "react";
import {userSignUp} from "./api/userApis"

const SignUp = () => {
    const userEmailRef = useRef()
    const userPasswordRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const DOBRef = useRef()
    const genderRef = useRef()
    const signUpUser= async (e)=>{
        e.preventDefault()
        const userEmail = userEmailRef.current.value
        const userpassword = userPasswordRef.current.value
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const DOB = DOBRef.current.value
        const gender = genderRef.current.value
        console.log(firstName, lastName, DOB, gender, userEmail,userpassword)
        const userData = {
            'firstName':firstName,
            'lastName':lastName,
            'DOB': DOB,
            'gender':gender,
            'userEmail':userEmail,
            'userPassword':userpassword
        }
        const response = await userSignUp(userData)
        if(response.status == 200){
            alert("USER CREATED")
        }
        else{
            alert("Cannot create user")
        }
    }
    return (
        <div className="flex justify-center content-center h-screen items-center bg-white">
            <div className="flex border-2 border-gray-100 items-center justify-center p-52 shadow-md z-10  bg-white">
                <form className="border-2 border-green-300 p-10 z-10" onSubmit={signUpUser}>
                    <div className=" flex justify-center text-2xl font-medium text-green-300"> Signup </div>
                    <div className="p-5">
                        <label className=" p-5 text-2xl ">
                            First Name
                        </label>
                        <input className="border-yellow-400 bg-gray-50 h-10 text-2xl" type="text" placeholder="First Name" ref={firstNameRef}/>
                    </div>
                    <div className="p-5">
                        <label className=" p-5 text-2xl ">
                            Last Name
                        </label>
                        <input className="border-yellow-400 bg-gray-50 h-10 text-2xl" type="text" placeholder="Last Name" ref={lastNameRef}/>
                    </div>
                    <div className="p-5">
                        <label className=" p-5 text-2xl ">
                            Date of Birth
                        </label>
                        <input className="border-yellow-400 bg-gray-50 h-10 text-2xl" type="date"  ref={DOBRef}/>
                    </div>
                    <div className="p-5">
                        <label className=" p-5 text-2xl ">
                            Gender
                        </label>
                        <select className="border-yellow-400 bg-gray-50 h-10 text-2xl" type="text" ref={genderRef}>
                        <option value='M'>Male</option>

                        <option value='F'>Female</option>

                        <option value='O'>Other</option>
                        </select>
                    </div>
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
                        <button className="bg-green-500 rounded-full p-2 text-white text-2xl px-5 text-center" type="submit"> SignUp </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
export default SignUp;