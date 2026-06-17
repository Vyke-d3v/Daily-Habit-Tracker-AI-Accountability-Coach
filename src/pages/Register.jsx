


function Register(){
    
    return(
        <>
        <div className="Login-heading">
            <h3>Create Your Account</h3>
            <p>Start tracking your daily Habits.</p>
        </div>
        <div className="Registration-form">
            <form action="Register">
                <label htmlFor="name">Name</label>
                <input type="text" name="user-name" id="user-name" placeholder="Eg. Vyke Muriithi"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="user-email" id="user-email" placeholder="Eg. muriithivyke@gmail.com" />
                <label htmlFor="password">Password</label>
                <input type="password" name="user-password" id="user-password" placeholder="Eg. echocoach@2026" />
            </form>
            <div className="Register-alt">
                <h4>Or</h4>
                <p>Continue With Google.</p>
            </div>
        </div>
        </>
    );
}

export default Register;