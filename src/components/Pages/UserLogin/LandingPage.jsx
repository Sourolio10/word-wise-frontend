import logo from './assets/logo.png';
import './App.css';

const LandingPage = () => {
  return (
    
    <div className="bg-gray-100">
      <nav className="bg-blue-500 py-4 px-5">
        <div className="container mx-auto flex-row space-x-1 content-end">
          <img className="w-20 h-20" src={logo}/>
          
          
          <button className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-1 px-4 rounded-full float-right">
           Log in
          </button>
          <button className="bg-white hover:bg-blue-700 text-blue-500 font-bold py-1 px-4 rounded-full float-right">
           Sign up
          </button>
        </div>
        
      </nav>


      <div className="grid place-items-center">
      <header className="py-16">
        <div className="md:container mx-auto max-w-100">
          <h1 className="text-4xl text-gray-900 font-semibold content-center">Supercharge Your Vocabulary</h1>
          
          <p className="mt-4 text-xl text-gray-600">Learn new words, improve your vocabulary, and ace your exams.</p>
          
          <br></br>

          <a href="/signup" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Sign up for free
          </a>
        </div>
      </header>
      </div>
      
      
      
      
      <footer className="bg-blue-500 py-4 fixed inset-x-0 bottom-0 p-4">
        <div className="container mx-auto">
          <p className="text-white text-center">© {new Date().getFullYear()} WordWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}

export default LandingPage;
