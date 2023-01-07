import classes from './auth.module.css'
import Form from './form'
import AuthSVG from './authSvg'
import { Link } from 'react-router-dom'
import Logo from '../../SVG/logo'
const Auth = () => {
    return <div className={classes.app}>
        <header className={classes.header}>
            {/* <img src={logo} alt="" /> */}
            <Logo />
            01.01.2013
        </header>
        <div className={classes.auth}>
           <div className={classes.uduxSvg}>
            <AuthSVG />
           </div>
           <div className={classes.acct}>Create Account</div>
           <div>
            <Form/>
            <div className={classes.create}>
            <button className={classes.btn}>Create Account</button>
            <p className={classes.signUp}>Already have an account? <Link to='/'>login</Link></p>
           </div>
           </div>
          
           <div className={classes.bottom}>Powerd by OneID</div>
        </div>
        </div>
}

export default Auth