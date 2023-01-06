import classes from './side.module.css'
import InstagramSVG from '../../SVG/instagramSVG'
import TweeterSVG from '../../SVG/tweeterSVG'
import { Link } from 'react-router-dom'
const Side = () => {
    return <div className={classes.side}>
    <TweeterSVG />
    <InstagramSVG />
    <p className={classes.faqs}><Link to='/faqs'>FAQs</Link></p>
</div>
}

export default Side