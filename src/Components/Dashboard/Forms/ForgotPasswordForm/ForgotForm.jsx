import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import key from '/src/assets/svgs/key.svg';
import FormButton from '/src/Components/Buttons/FormButton';
import InputField from '../../../Inputs/InputField.jsx';

function ForgotForm() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/general/forgot-password/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                // ✅ Notificación de éxito
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    },
                });

                Toast.fire({
                    icon: "success",
                    title: "Correo de recuperación enviado correctamente",
                });

                // Redirigir al usuario al mensaje de éxito
                setTimeout(() => {
                    navigate("/correo_enviado_pass/");
                }, 1000);

            } else {
                // ❌ Notificación de error
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    },
                });

                Toast.fire({
                    icon: "error",
                    title: data.error || "No se pudo enviar el correo",
                });
            }

        } catch (error) {
            // ❌ Error de conexión
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
            });

            Toast.fire({
                icon: "error",
                title: "Error de conexión con el servidor",
            });
        }
    };

    return (
        <div className='login-form-container mx-auto mt-4'>
            <div className="text-center">
                <img src={key} alt="key icon" className='login-icon' />
            </div>
            <div className="text-center mt-1">
                <p>Escribe tu correo electrónico y enviaremos la información para recuperar la contraseña</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <InputField
                        type="email"
                        placeholder="Correo electrónico"
                        className="form-control mt-4"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <FormButton className="btn btn-dark btn-block mt-4" label="Enviar" />
            </form>
            <div className="text-center mt-4">
                <a href="/login_administrador">Volver al login</a>
            </div>
        </div>
    );
}

export default ForgotForm;
