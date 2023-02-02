export const dateFormatter = (date: string | Date) => {
  const newDate = new Date(date)
  const formatter = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

  return formatter.format(newDate)
}
