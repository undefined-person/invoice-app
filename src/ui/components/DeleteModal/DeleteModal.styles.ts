import styled from 'styled-components'

import { theme } from 'core/theme'

export const DeleteModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background: ${theme.light.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  position: absolute;
  z-index: 999;
  width: 480px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 48px;
`

export const DeleteParagraph = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: ${theme.light.baliHai};
`

export const DeleteControls = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: flex-end;

  & > button {
    width: 90px;
  }
`
