import LoginForm from "./Forms/LoginForm";
function Login(){
    return (
        <>
        <div className="container">
            <h1 className="login-title text-center mt-3">Login Administrador</h1>
            <h3 className="login-subtitle text-center mt-3">Inicia Sesión</h3>
        </div>
        <LoginForm></LoginForm>
        </>
    )
}

export default Login;