import styled from 'styled-components'

import { theme } from 'core/theme'

export const CreateModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 40vw;
  height: 100vh;
  background: ${theme.light.white};
  border-radius: 0px 20px 20px 0px;
  overflow-y: scroll;
`

export const CreateModalContainer = styled.div`
  position: relative;
`

export const CreateModalForm = styled.form`
  padding: 56px 56px 0 150px;
`

export const CreateModalTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.light.primary};
  margin-top: 48px;
  margin-bottom: 24px;
`

export const CreateModalGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 24px;
`

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`

export const CreateModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  border-radius: 0px 20px 20px 0px;
  bottom: 0;
  z-index: 10;
  background-color: ${theme.light.white};
  padding: 31px 56px 31px 150px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.1) 100%);
    z-index: -5;
    pointer-events: none;
  }
`

export const CreateModalButtonsRight = styled.div`
  display: flex;
  column-gap: 8px;
`
