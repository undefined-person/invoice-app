import styled from 'styled-components'

import { theme } from 'core/theme'
import { DropdownItem } from '../CheckboxGroup/CheckboxGroup.styles'

export const SelectContainer = styled.div`
  position: relative;
`

export const SelectValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 1px solid ${theme.light.selago};
  border-radius: 4px;
  padding: 18px;
  font-weight: 700;
  cursor: pointer;
`
export const SelectContent = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 5;
  background: #ffffff;
  box-shadow: 0 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`

export const SelectItem = styled(DropdownItem)`
  border-bottom: 1px solid ${theme.light.selago};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${theme.light.primary};
  }

  span {
    padding: 16px 24px;
  }
`
