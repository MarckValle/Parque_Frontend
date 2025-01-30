import ForgotForm from '/src/Components/Dashboard/Forms/ForgotPasswordForm/ForgotForm'

function ForgotPassword(){
    return(
        <div className="container text-center mt-5">
            <h1 className='login-title' alt='key icon'>¿Olvidaste tu Contraseña?</h1>
            <ForgotForm />
        </div>
    )
}

export default ForgotPassword;