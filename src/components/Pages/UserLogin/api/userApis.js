const SIGN_UP_URL = 'http://localhost:5000/api/users/signup'
const LOG_IN_URL = 'http://localhost:5000/api/users/login'
const userSignUp = async (userData) =>{
    const response = await fetch(SIGN_UP_URL,{
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        method:"POST",
        body:new URLSearchParams(userData)
    })

    return response
}

const userLogin = async (userData) =>{
    const response = await fetch(LOG_IN_URL,{
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        method:"POST",
        body:new URLSearchParams(userData)
    })
    return response
}

export {
    userLogin,
    userSignUp
}