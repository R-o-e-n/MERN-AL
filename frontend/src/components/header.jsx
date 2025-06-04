import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logoutUser } from '../store/slices/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    }
    return (
        <header className='header'>
            <div className="logo">
                <Link to='/'>Krijimi Task</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button className='btn' onClick={handleLogout}>
                            <FaSignOutAlt /> Dil
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login'><FaSignInAlt /> Hyr</Link>
                        </li>
                        <li>
                            <Link to='/register'><FaUser /> Regjistro</Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header