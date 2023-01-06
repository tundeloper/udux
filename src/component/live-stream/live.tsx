import classes from './live.module.css'
import AuthSVG from '../auth/authSvg'
import { Link } from 'react-router-dom'
import Header from '../Layout/header'
import Side from '../Layout/side'

const Live = () => {
    return <div className={classes.app}>
        <Header />
        <div className={classes.homeContent}>
            <div className={classes.side}><Side /></div>
            <div className={classes.main}>
                <button className={classes.btn}>Start stream</button>
            </div>
        </div>
        <p className={classes.powed}>Brought to you by</p>
        <div className={classes.media}>
            <AuthSVG />
        </div>
        <div className={classes.footer}>
            <div className={classes.auth}><Link to="/login" className={classes.a}>Login</Link> /<Link to="/auth" className={classes.a}> Sign Up</Link></div>
            <div><Link to='/faqs'>FAQS</Link></div>
        </div>
    </div>
}

export default Live
