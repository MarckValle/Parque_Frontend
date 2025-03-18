import key from '/src/assets/svgs/key.svg'
import InputField from '/src/Components/Inputs/Inputfield.jsx';
import FormButton from '/src/Components/Buttons/FormButton';

function ForgotForm(){
    return (
        <div className='login-form-container mx-auto mt-4'>
            <div className="text-center">
                <img src={key} alt="key icon" className='login-icon' />
            </div>
            <div className="text-center mt-1">
                <p>Escribe tu correo electronico y enviaremos la información para recuperar la contraseña</p>
            </div>
            <form action="">
                <div className="form-group">
                    <InputField type="text" placeholder='Correo electronico' className='form-control mt-4' required/>
                </div>
                <FormButton className='btn btn-dark btn-block mt-4' label="Enviar"></FormButton>
            </form>
            <div className="text-center mt-4">
                <a href="/login_administrador">Volver al login</a> 
            </div>
        </div>
    )
}

export default ForgotForm;