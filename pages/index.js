import classes from './HomePage.module.css';

function Login(){
    return(

<div>
    <h1>Registration</h1>
    <form className={classes.form} action="/api/register" method="post">
    <div className={classes.control}>
        
        <label>
            Email Address
        </label>
        <input type="email" name="email" placeholder="Type your email"></input>
        </div>
        
        <div className={classes.control}>
        <label>
            Password
        </label>
        <input type="password" name="password" placeholder="Type your password"></input>
        </div>
        <div className={classes.input}>
        <input type="submit" value="Register"></input>
        </div>
    </form>

    <h1>Login</h1>
    <form className={classes.form} action="api/login" method="post">
    <div className={classes.control}>
        <label>
            Email Address
        </label>
        <input type="email"  name="email" placeholder="Type your email"></input>
        </div>
        
        <div className={classes.control}>
        <label>
            Password
        </label>
        <input type="password" name="password" placeholder="Type your password"></input>
        </div>
        <div className={classes.input}>
        <input type="submit" value="Login"></input>
        </div>
    </form>
</div>
    )

}

export default Login;