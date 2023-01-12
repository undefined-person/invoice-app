import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'

import { InputGroup, Label } from 'ui/common'

import { CalendarIcon, DataPickerWrapper } from 'ui/common/DatePicker/DatePicker.styles'
import DataPickerCalendarIcon from 'assets/images/icons/icon-calendar.svg'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerProps {
  label: string
  onDateChange: (date: Date) => void
}

export const DateSelector: FC<DatePickerProps> = ({ label, onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <InputGroup>
      <Label>{label}</Label>
      <DataPickerWrapper>
        <DatePicker
          dateFormat="d MMM yyyy"
          className="calendar"
          onKeyDown={(e) => {
            e.preventDefault()
          }}
          selected={startDate}
          onChange={(date: Date) => {
            setStartDate(date)
            onDateChange(date)
          }}
        />
        <CalendarIcon src={DataPickerCalendarIcon} />
      </DataPickerWrapper>
    </InputGroup>
  )
}
