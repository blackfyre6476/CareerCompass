import AuthForm from "../components/forms/AuthForm"

const SignUp = () => {
  return (
    <div className="flex justify-center bg-background items-center min-h-screen min-w-screen">
      <AuthForm type="sign-up" />
    </div>
  )
}

export default SignUp