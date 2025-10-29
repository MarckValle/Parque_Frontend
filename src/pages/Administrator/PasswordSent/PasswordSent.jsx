import PasswordSent from '/src/Components/Dashboard/Forms/ForgotPasswordForm/PasswordSent'
import '/src/assets/styles/login.css';



function PasswordSentPage(){
    return(
        <div className="container text-center mt-5">
            <h1 className='login-title' alt='key icon'>¿Olvidaste tu Contraseña?</h1>
            <PasswordSent />
        </div>
    )
}

export default PasswordSentPage;