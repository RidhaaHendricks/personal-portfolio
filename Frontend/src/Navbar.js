import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-tabs">
            <h3 className="name">Ridhaa Hendricks</h3>
            <NavLink to="/home" activeClassName="active" className="links"
                activeStyle={{
                    backgroundColor: 'silver',
                    borderRadius: '8px',
                    padding: '0 15px 0 15px'
                }}
                style={{
                    marginLeft: '15%',
                    fontSize: '20px',
                    textDecoration: 'none'
                }}>Home</NavLink>
            <NavLink to="/contact" activeClassName="active"
                activeStyle={{
                    backgroundColor: 'silver',
                    borderRadius: '8px',
                    padding: '0 15px 0 15px'
                }}
                style={{
                    marginLeft: '15%',
                    fontSize: '20px',
                    textDecoration: 'none'
                }}>Contact</NavLink>
        </div >
    );
}

export default Navbar;
