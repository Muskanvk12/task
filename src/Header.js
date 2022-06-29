import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className="headerWrapper">
            <div className="headerLogo">
                <img className="img" src="/Images/image.png" alt="" />
            </div>
            <div className="headerTitle">
                <p>beautiful Name plate for you beautiful Home</p>
            </div>
            <div className="createOwn">
                <Link to="/createnameplate" className="createBtn">Create Your Name plate</Link>
            </div>
        </div>
    )
}

export default Header;
