import { NavLink } from 'react-router-dom';
import polygon from '../../Assets/Images/polygon.svg';
import search from '../../Assets/Images/search.svg';
import Button from '../Button/Button';


const Header = () => {
    return(
        <div className='w-full my-3 p-0'>
          <div className='w-5/6 m-auto flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <img src={polygon} alt="POLYGON-LOGO" className='mr-2.5'/>    
                <h3 className='text-header-100 text-100 font-semibold font-coda'>POLYGON</h3>
            </div>
            <div>
                <nav>
                    <ul className='flex justify-center align-center'>
                        <li className='mr-7 text-header-100 font-medium font-circular'>
                            <NavLink to="Discover">Discover</NavLink>
                        </li>
                        <li className='mr-7 text-header-100 font-medium font-circular'>
                            <NavLink to="Marketplace">Marketplace</NavLink>
                        </li>
                        <li className='mr-7 text-header-100 font-medium font-circular'>
                            <NavLink to="Resources">Resources</NavLink>
                        </li>
                        <li className='text-header-100 font-medium font-circular'>
                            <NavLink to="Stats">Stats</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex items-center'>
                <div className='mr-24'>
                    <img src={search} alt="search-icon" />
                </div>
                <Button />
            </div>
          </div>
        </div>
    )
}

export default Header;