import styled from 'styled-components'

import { theme } from 'core/theme'
import { BackContainer } from 'ui/common/BackButton/BackButton.styles'

export const CreateModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  left: 0;
  top: 0;
  width: 60vw;
  height: 100vh;
  background: ${theme.light.white};
  border-radius: 0px 20px 20px 0px;
  overflow-y: scroll;

  @media screen and (min-width: ${theme.breakpoints.desktopXL}) {
    width: 40vw;
  }

  @media screen and (max-width: ${theme.breakpoints.desktopL}) {
    width: 80vw;
  }

  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    width: 95vw;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 90vw;
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100vw;
  }
`

export const CreateModalContainer = styled.div`
  position: relative;
`

export const CreateModalForm = styled.form`
  padding: 56px 56px 0 150px;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 100px 56px 0 56px;
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: 120px 24px 0 24px;

    ${BackContainer} {
      margin-bottom: 24px;
    }
  }
`

export const CreateModalTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${theme.light.primary};
  margin-top: 48px;
  margin-bottom: 24px;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    margin-top: 24px;
  }
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

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 24px;
  }
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

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 31px 56px 31px 56px;
  }
  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 31px 24px 31px 24px;
  }
`

export const CreateModalButtonsRight = styled.div`
  display: flex;
  column-gap: 8px;
`

export const EditModalButtons = styled(CreateModalButtons)`
  justify-content: flex-end;
`
