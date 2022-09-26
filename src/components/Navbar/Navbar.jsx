import './Navbar.css';
import logo from '../../assets/logo.png'
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'



export const Navbar = ({ needLogin }) => {
    return (
      
      <nav className="flex items-center justify-between flex-wrap bg-transparent p-4 font-mono bg-notblack ">
      <div className="flex items-center flex-shrink-0 text-white mr-10">
        <img src={logo} className="w-20" alt=" "/>
        <span className="font-extrabold text-2xl uppercase tracking-tight">Interaction GUI</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-orange hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white transition duration-150 fill hover:text-orange hover:border-transparent hover:-translate-y-1 mr-4 ">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white transition duration-150 fill  hover:text-orange hover:border-transparent hover:-translate-y-1 mr-4">
           Main Site
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white transition duration-150 fill hover:text-orange hover:border-transparent hover:-translate-y-1">
            Guides
          </a>
          
        </div>
        {
          needLogin ? 
            <div>
              <Link to={'/login'}>
                <p className="flex items-center text-center m-auto text-lg px-4 py-2 leading-loose border rounded text-white border-white transition duration-150 fill hover:bg-orange mt-4 lg:mt-0 hover:border-transparent hover:-translate-y-1"><BiLogInCircle className="w-6 h-6"/> Login</p>
              </Link>
            </div>
            :
            <></>  
        }
      </div>
    </nav>


   


    )
}

export default Navbar;

