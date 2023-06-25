import React from "react";

const SignUp = () => {

    return (
        <div className="flex justify-center content-center h-screen items-center">
            <div className="flex border-2 border-gray-100 items-center justify-center"> 
                <form>
                    <div>
                        <label className="p-5">
                            Email Id
                        </label>
                        <input type="text" placeholder="abc@gmail.com" />
                    </div>
                    <div>
                        <label className=" p-5 ">
                            Password
                        </label>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-500 rounded-full p-2 text-white"> SignUp </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
export default SignUp;