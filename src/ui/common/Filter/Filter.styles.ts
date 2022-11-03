import styled from 'styled-components'

import { theme } from 'core/theme'

export const Dropdown = styled.div`
  position: relative;
`

export const DropdownButton = styled.button`
  background: none;
  border: none;
  font-family: 'Spartan', sans-serif;
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${theme.light.heading};
  cursor: pointer;
`

export const DropdownContent = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -15%;
  top: 200%;
  width: 192px;
  height: 128px;
  background: #ffffff;
  box-shadow: 0 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  padding: 24px;
  gap: 16px;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0c0e16;
`

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }

  &:checked + label {
    color: ${theme.light.mirage};
  }

  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 16px;
    height: 16px;
    background: ${theme.light.selago};
    border-radius: 2px;
    border: 2px solid transparent;
  }

  &:hover + label:before {
    border: 2px solid ${theme.light.primary};
  }

  &:checked + label:before {
    background: ${theme.light.primary};
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`
