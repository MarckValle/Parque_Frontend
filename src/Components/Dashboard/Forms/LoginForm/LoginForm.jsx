import InputField from "/src/Components/Inputs/inputfield";
import loginicon from "/src/assets/user-icon.svg";
import FormButton from "/src/Components/Buttons/FormButton";

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { login } from "/src/utils/api/Login/login.api";

function LoginForm(){

    const {register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate();
    const onSubmit = handleSubmit(
        async (data) => {
            
            try{
                await login(data); 
                
                console.log("Login successfully")
                setTimeout(() => {
                    navigate('/dashboard/'); 
                    
                }, 2000);
            } catch (error){
                console.log("Error al iniciar sesion")
            }
            
        });

    return(

        <div className="login-form-container mx-auto mt-4">
            <div className="text-center">
                <img src={loginicon} alt="user-icon" className="login-icon" />
            </div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Correo electronico" {...register("username", {required: true})}/>
                    {errors.username && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input className="form-control mt-3" type="password" placeholder="Password" {...register("password", {required: true})} />
                    {errors.password && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-check mt-4">
                    <InputField className="form-check-input" type="checkbox" id="showPass"  />
                    <label htmlFor="showPass">Mostrar contraseña</label>
                </div>
                <FormButton type="submit" className="btn btn-dark btn-block mt-3" label="Inicia Sesion"></FormButton>
            </form>
            <p className="text-center mt-3">
                <a href="/reestablecer_pass" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
            </p>
        </div>
    
        );
}

export default LoginForm;