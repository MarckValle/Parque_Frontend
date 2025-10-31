import ResetPasswordForm from '../../Components/Dashboard/Forms/ForgotPasswordForm/ResetPassForm';
import '/src/assets/styles/login.css';



function ResetPassword(){
    return(
        <div className="container text-center mt-5">
            <ResetPasswordForm />
        </div>
    )
}

export default ResetPassword;