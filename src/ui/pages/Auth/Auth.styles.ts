import styled from 'styled-components'

import { theme } from 'core/theme'

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 20px;
  row-gap: 15px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`

export const AuthFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  a {
    font-size: 10px;
    color: ${theme.light.baliHai};
  }
`
