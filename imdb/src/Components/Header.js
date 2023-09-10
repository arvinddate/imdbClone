import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="site-header">

            <div className="container">
                <span className="link"><Link className="navigation-link" to='/' >Movie List</Link></span>
                <span className="link"><Link className="navigation-link" to='/favourites' >Favourits</Link></span> 
                <span className="link"><Link className="navigation-link" to='/add-movie' >Add Movie</Link></span>              

            </div>
            </div>
    )
};
export default Header;