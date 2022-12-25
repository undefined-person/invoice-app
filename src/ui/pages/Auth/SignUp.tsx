import { FieldValues, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ROUTES } from 'core/constants'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { Button, FormInput } from 'ui/common'
import { Logo } from 'ui/components'
import { PasswordInput } from './PasswordInput'
import { registration } from 'core/store/user'
import { IRegistrationPayload } from 'core/models'

import { AuthFooter, AuthForm, AuthWrapper } from './Auth.styles'

export const SignUp = () => {
  const { loading, error } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()

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

  const submitForm = (data: FieldValues) => {
    dispatch(registration(data as IRegistrationPayload))
  }

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit((data) => submitForm(data))}>
        <Logo isRounded width={110} />
        <FormInput type="email" name="email" label="Email" register={register} errors={errors} />
        <FormInput type="username" name="username" label="Username" register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <Button type="submit" color="primary" disabled={loading}>
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
