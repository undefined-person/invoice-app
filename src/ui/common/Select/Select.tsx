import { FC } from 'react'

import { useBoolean } from 'core/hooks'

import Arrow from 'assets/images/icons/icon-arrow.svg'

import { SelectContainer, SelectContent, SelectItem, SelectValue } from './Select.styles'

interface FilterOption {
  label: string
  value: number
}

interface SelectOption {
  placeholder?: string
  options: Array<FilterOption>
  value?: FilterOption
  onChange: (value: FilterOption) => void
}

export const Select: FC<SelectOption> = ({ onChange, options, placeholder, value }) => {
  const { toggle, value: isActive, setFalse } = useBoolean()

  return (
    <SelectContainer>
      <SelectValue onClick={toggle}>
        <span>{value?.label}</span> <img src={Arrow} alt="" />
      </SelectValue>
      <SelectContent isVisible={isActive}>
        {options.map(({ label, value }) => (
          <SelectItem
            onClick={() => {
              onChange({ label, value })
              setFalse
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
