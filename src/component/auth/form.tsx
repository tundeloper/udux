import classes from './form.module.css'
const Form = () => {
return <form>
    <form>
    <div className={classes.auth_control}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id='email' />
    </div>
    <div className={classes.auth_control}>
        <label htmlFor="number">Phone Number</label>
        <input type="number" id='number' />
    </div>
    </form>
</form>
}

export default Form