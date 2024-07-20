const LoginForm = () => {
    return (<form>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
        </div>
        <div>
            <button type="button">Login</button>
        </div>
    </form>
)};

export default LoginForm;