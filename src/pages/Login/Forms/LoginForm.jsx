

function LoginForm(){
    return(

        <div className="login-form-container mx-auto mt-4">
            <div className="text-center">
                <img src="src/assets/user-icon.svg" alt="user-icon" className="login-icon" />
            </div>
            <form action="">
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Correo electronico" required />
                </div>
                <div className="form-group">
                    <input className="form-control mt-3" type="password" placeholder="Password" required />
                </div>
                <div className="form-check mt-4">
                    <input className="form-check-input" type="checkbox" id="showPass" />
                    <label htmlFor="showPass">Mostrar contraseña</label>
                </div>
                <button type="submit" className="btn btn-dark btn-block mt-3">Inicia sesión</button>
            </form>
            <p className="text-center mt-3">
                <a href="/reestablecer_pass" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
            </p>
        </div>
    
        );
}

export default LoginForm;