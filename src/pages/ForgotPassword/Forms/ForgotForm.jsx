import key from '../../../assets/svgs/key.svg'

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
                    <input type="text" placeholder='Correo electronico' className='form-control mt-4' required/>
                </div>
                <button className='btn btn-dark btn-block mt-4'>Enviar</button>
            </form>
            <div className="text-center mt-4">
                <a href="/login_administrador">Volver al login</a> 
            </div>
        </div>
    )
}

export default ForgotForm;