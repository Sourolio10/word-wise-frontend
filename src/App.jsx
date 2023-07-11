
// import './App.css'

//import Components
import LogIn from './components/Pages/UserLogin/LogIn'
import SignUp from './components/Pages/UserLogin/Signup'
import LandingPage from './components/Pages/LandingPage/LandingPage'
// import LogIn from './components/Pages/UserLogin/LogIn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>,
  },
      {
        path: '/Login',
        element: <LogIn/>
      },
      {
        path: '/Signup',
        element: <SignUp/>
      }
  
])
function App() {


  return <RouterProvider router={router}/>;
}

export default App
