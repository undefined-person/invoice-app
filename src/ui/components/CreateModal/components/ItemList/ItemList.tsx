import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { IInvoiceItem } from 'core/models'
import { generateId } from 'core/utils'
import { Button, Title } from 'ui/common'

import { Item } from './Item'

import { ItemListContainer, ItemListHeader } from './ItemList.styles'

interface ItemListProps {
  items: IInvoiceItem[]
  setItems: (items: IInvoiceItem[]) => void
  register: UseFormRegister<FieldValues>
  errors: FieldValues
}

export const ItemList: FC<ItemListProps> = ({ items, setItems, register, errors }) => {
  const handleItemChange = (id: string, updatedItem: IInvoiceItem) => {
    const total = updatedItem.price * updatedItem.quantity
    const updatedItemWithTotal = { ...updatedItem, total }

    setItems((prevItems: IInvoiceItem[]) => {
      // Find the index of the item in the array
      const index = prevItems.findIndex((item) => item.id === id)
      // Create a new array with the updated item
      const newItems = [...prevItems]
      newItems[index] = updatedItemWithTotal
      return newItems
    })
  }

  const handleAddItem = () => {
    const id = generateId()
    setItems([...items, { id, name: '', price: 0, quantity: 0, total: 0 }])
  }

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <ItemListContainer>
      <Title title="Item List" size="medium" />
      <ItemListHeader>
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span></span>
      </ItemListHeader>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          errors={errors}
          register={register}
          onChange={handleItemChange}
          handleDelete={handleDeleteItem}
        />
      ))}
      <Button isFullWidth type="button" color="sky" onClick={handleAddItem}>
        + Add New Item
      </Button>
    </ItemListContainer>
  )
}
