import { theme } from 'core/theme'

import styled from 'styled-components'

export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
`

export const Input = styled.input<{ isError?: boolean }>`
  border-radius: 4px;
  padding: 17px 20px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  width: 100%;
  color: ${theme.light.heading};
  outline: none;

  &:not(:focus) {
    border: ${(props) => `1px solid ${props.isError ? theme.light.coral : theme.light.selago}`};
  }

  &:focus {
    border: 1px solid ${theme.light.lightViolet};
  }
`

export const InputGroup = styled.div<{ isError?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;

  ${Label} {
    color: ${(props) => (props.isError ? theme.light.coral : theme.light.shipCove)};
  }

  ${Input}:not(:focus) {
    border: ${(props) => `1px solid ${props.isError ? theme.light.coral : theme.light.selago}`};
  }
`

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Error = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.208333px;
  color: ${theme.light.coral};
`
