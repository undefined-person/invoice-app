import { FC } from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'

import { IInvoiceItem } from 'core/models'
import { Input } from 'ui/common'
import { Delete } from 'ui/icons'

import { ItemContainer, ItemListBody, ItemTotal } from './ItemList.styles'

interface ItemProps {
  register: UseFormRegister<FieldValues>
  errors: FieldValues
  item: IInvoiceItem
  onChange: (id: string, item: IInvoiceItem) => void
  index: number
  handleDelete: (id: string) => void
}

export const Item: FC<ItemProps> = ({ item, errors, register, onChange, index, handleDelete }) => {
  const { name, price, quantity, total, id } = item
  const handleInputChange = (event: any) => {
    // Update the item in the `items` state
    onChange(id, { ...item, [event.target.id]: event.target.value })
  }

  return (
    <ItemContainer>
      <ItemListBody>
        <Input type="text" id="name" {...register(`name_${id}`)} value={name} onChange={(e) => handleInputChange(e)} />
        <Input
          type="number"
          id="price"
          {...register(`price_${id}`)}
          value={price}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          type="number"
          id="quantity"
          {...register(`quantity_${id}`)}
          value={quantity}
          onChange={(e) => handleInputChange(e)}
        />
        <ItemTotal>{total}</ItemTotal>
        <button onClick={() => handleDelete(id)}>
          <Delete />
        </button>
      </ItemListBody>
      {errors.name && <span>{errors.name.message}</span>}
    </ItemContainer>
  )
}
