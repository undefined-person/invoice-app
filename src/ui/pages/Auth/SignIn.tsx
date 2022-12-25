import { FieldValues, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { ROUTES } from 'core/constants'
import { Button, FormInput } from 'ui/common'
import { Logo } from 'ui/components'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { login } from 'core/store/user'
import { ILoginPayload } from 'core/models'

import { PasswordInput } from './PasswordInput'

import { AuthFooter, AuthForm, AuthWrapper } from './Auth.styles'

export const SignIn = () => {
  const { loading, error } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()

  const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('cannot be empty'),
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
    dispatch(login(data as ILoginPayload))
  }

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit((data) => submitForm(data))}>
        <Logo isRounded width={110} />
        <FormInput type="email" name="email" label="Email" register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <Button type="submit" color="primary" disabled={loading}>
          Sign in
        </Button>
        <AuthFooter>
          <Link to={ROUTES.signUp}>Sign up</Link>
          <Link to={ROUTES.restorePassword}>Forgot password?</Link>
        </AuthFooter>
      </AuthForm>
    </AuthWrapper>
  )
}
