export default function Login() {
    return (
        <div>
            <h1>Its login page</h1>
            <form>
                <label for='email'>Email</label>
                <input name="email" type='email'></input>
                <br />
                <label for='password'> Password:</label>
                <input name="password" type='password'> </input>
                <br />
                <button>
                    Sign in
                </button>
            </form>
        </div>
    )
}