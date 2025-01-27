import LoginForm from "./Forms/LoginForm";
import '../../assets/styles/login.css'


function Login(){
    return (
        <>
        <div className="container text-center mt-5">
            <h1 className="login-title">Login Administrador</h1>
            <h3 className="login-subtitle">Inicia Sesión</h3>
            <LoginForm></LoginForm>
        </div>
        </>
    )
}

export default Login;