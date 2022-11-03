import React, { FC, useState } from 'react'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import { Checkbox, Dropdown, DropdownButton, DropdownContent, DropdownItem } from './Filter.styles'

interface FilterOption {
  label: string
  value: string
}

interface FilterProps {
  placeholder: string
  options: Array<FilterOption>
  defaultValue?: string
  type: 'select' | 'dropdown'
}

export const Filter: FC<FilterProps> = ({ defaultValue, options, placeholder, type }) => {
  const [isActive, setActive] = useState<boolean>(false)

  if (type === 'select') {
    return (
      <>
        <DropdownButton>
          {placeholder} <img src={Arrow} alt="" />
        </DropdownButton>
      </>
    )
  }

  if (type === 'dropdown') {
    return (
      <Dropdown>
        <DropdownButton onClick={() => setActive(!isActive)}>
          {placeholder} <img src={Arrow} alt="" />
        </DropdownButton>
        <DropdownContent isVisible={isActive}>
          {options.map(({ label, value }) => (
            <DropdownItem>
              <Checkbox type="checkbox" id={value} value={value} />
              <label htmlFor={value}>{label}</label>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    )
  }

  return null
}
