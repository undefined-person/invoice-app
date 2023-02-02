import { FC } from 'react'

import { useBoolean } from 'core/hooks'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import { Checkbox, Dropdown, DropdownButton, DropdownContent, DropdownItem } from './CheckboxGroup.styles'

interface CheckboxGroupProps {
  placeholder: string
  options: Array<{ label: string; value: string }>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({ onChange, options, placeholder }) => {
  const { toggle, value: isActive } = useBoolean()

  return (
    <Dropdown>
      <DropdownButton onClick={toggle}>
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
