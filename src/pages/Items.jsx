import React from 'react'

export default function Items({collection, handleDelete, handleEdit}) {
  return (
    <div>
      {/* create a button or link that takes you to detail page of a specific item*/}
      {
        collection && collection.map(item => (
          <div key={item._id}>
            <p>Item Name: <strong>{item.title}</strong></p>
            <p>Importance Level: <strong>{item.importance}</strong></p>
            <p>Date: <strong>{item.date}</strong></p>
            <button onClick={() => handleEdit(item._id)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}
