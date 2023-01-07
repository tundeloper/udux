import Damini2 from '../../SVG/damini'
import classes from './home.module.css'
import { Link } from 'react-router-dom'
import SadSVG from '../../SVG/sadTearsSVG'
import Good from '../../SVG/goodSVG'

const Home = () => {
    return  <div className={classes.app}>
    <div className={classes.content}>
        <Damini2 />
        <h1>Shey Gbedu dey enter body?</h1>
        <div>
            <Link to='/live-stream'><Good />Yes ké</Link>
            <Link to='/'><SadSVG />At all</Link>
        </div>
    </div>
</div>
}

export default Home