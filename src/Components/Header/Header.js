import { NavLink } from 'react-router-dom';
import polygon from '../../Assets/Images/polygon.svg';
import search from '../../Assets/Images/search.svg';


const Header = () => {
    return(
        <div className='w-full m-0 p-0'>
          <div className='w-5/6 m-auto flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <img src={polygon} alt="POLYGON-LOGO" className='mr-2.5'/>    
                <h3 className='text-header-100 text-100 font-semibold'>POLYGON</h3>
            </div>
            <div>
                <nav>
                    <ul className='flex justify-center align-center'>
                        <li className='mr-7 text-header-100 font-medium'>
                            <NavLink to="Discover">Discover</NavLink>
                        </li>
                        <li className='mr-7 text-header-100 font-medium'>
                            <NavLink to="Marketplace">Marketplace</NavLink>
                        </li>
                        <li className='mr-7 text-header-100 font-medium'>
                            <NavLink to="Resources">Resources</NavLink>
                        </li>
                        <li className='text-header-100 font-medium'>
                            <NavLink to="Stats">Stats</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex items-center'>
                <div className='mr-24'>
                    <img src={search} alt="search-icon" />
                </div>
                <div className='border-gray-900  mb-5 ml-5'>
                    <button className='flex items-center bg-header-100 py-3.5 px-6 rounded-tl-lg rounded-br-lg '>
                        <span className='text-white mr-2'>Connect Wallet</span>
                        <img src={polygon} alt="POLYGON-LOGO" />
                    </button>  
                </div>
            </div>
          </div>
        </div>
    )
}

export default Header;