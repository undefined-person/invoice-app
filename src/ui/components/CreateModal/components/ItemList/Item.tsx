import { FC } from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'

import { IInvoiceItem } from 'core/models'
import { Input } from 'ui/common'
import { Delete } from 'ui/icons'

import { ItemContainer, ItemGroup, ItemLabel, ItemListBody, ItemTotal } from './ItemList.styles'

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
        <ItemGroup>
          <ItemLabel>Item Name</ItemLabel>
          <Input
            type="text"
            id="name"
            {...register(`name_${index}`)}
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </ItemGroup>
        <ItemGroup>
          <ItemLabel>Qty.</ItemLabel>
          <Input
            type="number"
            id="quantity"
            {...register(`quantity_${index}`)}
            value={quantity}
            onChange={(e) => handleInputChange(e)}
          />
        </ItemGroup>
        <ItemGroup>
          <ItemLabel>Price</ItemLabel>
          <Input
            type="number"
            id="price"
            {...register(`price_${index}`)}
            value={price}
            onChange={(e) => handleInputChange(e)}
          />
        </ItemGroup>
        <ItemGroup>
          <ItemLabel>Total</ItemLabel>
          <ItemTotal>{total}</ItemTotal>
        </ItemGroup>
        <ItemGroup>
          <span></span>
          <button onClick={() => handleDelete(id)}>
            <Delete />
          </button>
        </ItemGroup>
      </ItemListBody>
      {errors.name && <span>{errors.name.message}</span>}
    </ItemContainer>
  )
}
