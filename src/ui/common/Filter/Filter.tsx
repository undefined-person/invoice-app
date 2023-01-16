import { FC, useState } from 'react'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import {
  Checkbox,
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  Select,
  SelectContainer,
  SelectContent,
  SelectItem,
} from './Filter.styles'

export interface FilterOption {
  label: string
  value: string | number
}

interface FilterProps {
  placeholder?: string
  options: Array<FilterOption>
  value?: FilterOption
  type: 'select' | 'dropdown'
  onChange: <T>(value: T) => void
}

export const Filter: FC<FilterProps> = ({ value, options, placeholder, type, onChange }) => {
  const [isActive, setActive] = useState<boolean>(false)

  if (type === 'select') {
    return (
      <SelectContainer>
        <Select onClick={() => setActive(!isActive)}>
          <span>{value?.label}</span> <img src={Arrow} alt="" />
        </Select>
        <SelectContent isVisible={isActive}>
          {options.map(({ label, value }) => (
            <SelectItem
              onClick={() => {
                onChange({ label, value })
                setActive(false)
              }}
              key={value}
            >
              <span>{label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectContainer>
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
            <DropdownItem key={value}>
              <Checkbox onChange={(e) => onChange(e)} type="checkbox" id={value} value={value} />
              <label htmlFor={value}>{label}</label>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    )
  }

  return null
}
