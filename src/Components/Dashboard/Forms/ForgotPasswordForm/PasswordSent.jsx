import key from '/src/assets/svgs/checkmark-circle-outline.svg'
import FormButton from '/src/Components/Buttons/FormButton';

function PasswordSent(){
    return (
        <div className='login-form-container mx-auto mt-4'>
            <div className="text-center">
                <img src={key} alt="check icon" className='login-icon' />
            </div>
            <div className="text-center mt-1">
                <p>Enviamos un correo a tu cuenta, sigue las instrucciones para continuar con la recuperación de tu contraseña.</p>
            </div>
            <div className="text-center mt-4">
                <a href="/login_administrador">Volver al login</a> 
            </div>
        </div>
    )
}

export default PasswordSent;