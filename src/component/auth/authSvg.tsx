import UduxSVG from '../../SVG/uduxSvg'
import MtnSVG from '../../SVG/mtnSvg'
import EyeSVG from '../../SVG/eyeSvg'
import lagos from './Lagos State.png'
import classes from './authSVG.module.css'
const AuthSVG = () => {
    return <>
    <UduxSVG />
    <MtnSVG />
    <img src={lagos} alt="lagos" className={classes.img}/>
    <EyeSVG />
    </>
}

export default AuthSVG