import classes from './header.module.css'
import AuthSVG from '../auth/authSvg'
import { Link } from 'react-router-dom'
import log from './damini-gif.597ebe4daa8144aa2688.gif'
const Header = () => {
    return <header>
    <div className={classes.logo}>
        <img src={log} alt="Damini" className={classes.img}/>
        <p>01.01.2023</p>
        </div>
    <div className={classes.svg}><AuthSVG /></div>
    <div className={classes.auth}><Link to="/login" className={classes.a}>Login</Link> <Link to="/auth" className={classes.a}> Sign Up</Link></div>
</header> 
}

export default Header