import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './assets/images/logo.svg'



function NavBar({ onCategoryChange }) {
  return (

   
    
    <nav className='bg-gray-300 flex'>

        <img className='mr-80 p-2' src={logo}/>
        <a className='mr-8 p-4 hover:text-red-600 rounded' onClick={() => onCategoryChange('general')}>
          <Link to="/">General</Link>
        </a>
        <a className='mr-8 p-4 hover:text-red-600 rounded'onClick={() => onCategoryChange('business')}>
          <Link to="/">Business</Link>
        </a>
        <a className='mr-8 p-4 hover:text-red-600 rounded' onClick={() => onCategoryChange('technology')}>
          <Link to="/">Technology</Link>
        </a>
        <a className='mr-8 p-4 hover:text-red-600 rounded' onClick={() => onCategoryChange('health')}>
          <Link to="/">Health</Link>
        </a>
        <a className='mr-8 p-4 hover:text-red-600 rounded' onClick={() => onCategoryChange('sports')}>
          <Link to="/">Sports</Link>
        </a>
      
    </nav>
    
  );

}
NavBar.propTypes = {
    onCategoryChange: PropTypes.func.isRequired, 
  };


export default NavBar;



// import { Link } from 'react-router-dom';

// function NavBar() {
//   return (
//     <nav>
//       <ul>
        
//         <li>
//           <Link to="/news/general">General</Link>
//         </li>
//         <li>
//           <Link to="/news/business">Business</Link>
//         </li>
//         <li>
//           <Link to="/news/technology">Technology</Link>
//         </li>
//         <li>
//           <Link to="/news/health">Health</Link>
//         </li>
//         <li>
//           <Link to="/news/sports">Sports</Link>
//         </li>
//         {/* Add more links here as needed */}
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
