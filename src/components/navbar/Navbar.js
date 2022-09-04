import styles from './Navbar.module.css'
import { useLogout } from '../../hooks/useLogout'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const {isPending, error,logout}=useLogout();
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>My Money</li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>

        </ul>
    </nav>
  )
}
