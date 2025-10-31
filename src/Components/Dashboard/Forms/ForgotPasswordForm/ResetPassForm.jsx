import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import key from '/src/assets/svgs/key.svg';
import FormButton from '/src/Components/Buttons/FormButton';
import InputField from '../../../Inputs/InputField.jsx';

function ResetPasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const { uid, token } = useParams(); // ← Aquí obtenemos los parámetros dinámicos de la URL

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Las contraseñas no coinciden',
            });
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/general/update-password/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uid, token, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // ✅ Notificación de éxito
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    },
                });

                Toast.fire({
                    icon: 'success',
                    title: 'Contraseña actualizada correctamente',
                });

                // Redirigir al login después de un segundo
                setTimeout(() => {
                    navigate('/login_administrador');
                }, 1000);
            } else {
                // ❌ Error al actualizar
                Swal.fire({
                    icon: 'error',
                    title: data.error || 'Error al actualizar la contraseña',
                });
            }
        } catch (error) {
            // ❌ Error de conexión
            Swal.fire({
                icon: 'error',
                title: 'Error de conexión con el servidor',
            });
        }
    };

    return (
        <div className='login-form-container mx-auto mt-4'>
            <div className='text-center'>
                <img src={key} alt='key icon' className='login-icon' />
            </div>
            <div className='text-center mt-1'>
                <p>Ingresa tu nueva contraseña para tu cuenta.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <InputField
                        type='password'
                        placeholder='Nueva contraseña'
                        className='form-control mt-4'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputField
                        type='password'
                        placeholder='Repite la contraseña'
                        className='form-control mt-4'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <FormButton className='btn btn-dark btn-block mt-4' label='Actualizar' />
            </form>

            <div className='text-center mt-4'>
                <a href='/login_administrador'>Volver al login</a>
            </div>
        </div>
    );
}

export default ResetPasswordForm;
