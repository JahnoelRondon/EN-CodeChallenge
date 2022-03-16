import React from 'react'
import'./items.css'
import {Link} from 'react-router-dom'

export default function Items({collection, handleDelete}) {
  console.log(collection);

  collection.map(item => {
    const date = new Date(item.date);
    // fixes timezone day issue
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    item.date = date.toLocaleString();
  })

  return (
    <div>
      <h3>{collection.length ? 'All items' : 'No items'}</h3>
      {
        collection && collection.map(item => (
          <div key={item._id} className='item'>
            <p>Item Name: <strong>{item.title}</strong></p>
            <p>Price: <strong>${item.price}</strong></p>
            <p>Importance Level: <strong>{item.importance}</strong></p>
            <p>Date: <strong>{item.date}</strong></p>
            <Link to='/edit' state={item}>
              Edit
            </Link>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}
