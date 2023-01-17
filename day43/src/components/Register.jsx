export default function Register() {
    return (
        <div>
            <h1>Its Register page</h1>
            <form>
                <label for='email'>email</label>
                <input name='email' type='email'></input>
                <br />
                <label for='firstname'>Firsname</label>
                <input name='firstname' type='text'></input>
                <br />
                <label for='lastname'>Lastname</label>
                <input name='lastname' type='text'></input>
                <br />
                <label for='password'>Password</label>
                <input name='pasword' type='password'></input>
                <br />
                <label for='password'>Confirm Password</label>
                <input name='password' type='password'></input>
                <br />

            </form>
        </div>
    )
}