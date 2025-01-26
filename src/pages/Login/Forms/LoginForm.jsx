

function LoginForm(){
    return(

        <div className="login-form container w-50 mt-3">
            <div className="container d-flex justify-content-center">
                    <img src="src/assets/user-icon.svg" alt="user-icon" className="login-icon"></img>
            </div>
            <form action="" className="">
                <div className="form-group d-flex justify-content-center">
                    <input className="form-control mb-3 mt-3 w-50" type="text" name=""  placeholder="Escribe tu correo electronico"/>
                </div>
                <div className="form-group d-flex justify-content-center">
                    <input className="form-control mb-3 mt-3 w-50" type="text" name=""  placeholder="Escribe tu contraseña"/>
                </div>
                <div className="form-check d-flex justify-content-center mt-3">
                    <input className="form-check-input " type="checkbox" name="showPass" id="showPass" />
                    <label htmlFor="showPass">Mostrar contraseña</label>
                </div>
                <div className="form-group d-flex justify-content-center">
                    <button className="btn btn-primary w-25 mt-3">Iniciar sesión</button>
                </div>
            </form>
        </div>
    
        );
}

export default LoginForm;