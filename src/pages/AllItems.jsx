import React from 'react'
import AddItem from '../components/AddItem.jsx'
import Items from '../components/Items.jsx'

export default function AllItems({handleCreate, collection, handleDelete, handleEdit}) {
  return (
    <div>
      <AddItem handleCreate={handleCreate}/>
      <Items collection={collection} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}
