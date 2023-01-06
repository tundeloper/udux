import Side from "../Layout/side"
import AccordionData from "./accordionData"
import classes from './faqs.module.css'
import Header from "../Layout/header"
import Damini from "../../SVG/damini"
const Faqs = () => {
    return <div>
        <Header />
        <div className={classes.damini}>
            <Damini />
            <p>We know you have a lot of questions… We'll do our best to handle everything in this section.</p>
        </div>
        <div className={classes.side}>
            <Side />
        </div>
        <AccordionData />
        </div>

}

export default Faqs