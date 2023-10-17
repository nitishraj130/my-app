import logo from '../../images/logo512.png';
import './index.css'
function header(){
    return <div className='headerMain'>
              <div className='col col1'>
                <img src={logo} className="logo" />
              </div>
              <div className='col col2'>
                <h1 > 
                BookMyShow </h1>
                <p>Movie Booking Platform</p>
              </div>
              <div className='col col3'>
                <a href='#' className="right">
                  Login
                </a>
              </div>
          </div>;
        
}
export default header;