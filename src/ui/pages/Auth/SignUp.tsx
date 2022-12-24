import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ROUTES } from 'core/constants'
import { Button, FormInput } from 'ui/common'
import { Logo } from 'ui/components'
import { PasswordInput } from './PasswordInput'

import { AuthFooter, AuthForm, AuthWrapper } from './Auth.styles'

export const SignUp = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('cannot be empty'),
    username: yup
      .string()
      .min(4, 'username must be at least 4 characters')
      .max(20, 'username must be at most 20 characters'),
    password: yup.string().min(6, 'password must be at least 6 characters'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit((data) => console.log(data))}>
        <Logo isRounded width={110} />
        <FormInput type="email" name="email" label="Email" register={register} errors={errors} />
        <FormInput type="username" name="username" label="Username" register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <Button type="submit" color="primary">
          Sign up
        </Button>
        <AuthFooter>
          <Link to={ROUTES.signIn}>Sign in</Link>
          <Link to={ROUTES.restorePassword}>Forgot password?</Link>
        </AuthFooter>
      </AuthForm>
    </AuthWrapper>
  )
}
