import React from 'react'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

export default function Items({collection, handleDelete}) {
  const [mount, setMount] = useState(false)
  console.log(collection);

  useEffect(() => {
    if(!mount && collection.length > 0){
      // converting date to local
      collection.map(item => {
        const date = new Date(item.date);
        // fixes timezone day issue
        date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        item.date = date.toLocaleString();
      })
      setMount(true);
    }
  })

  return (
    <div>
      {
        collection && collection.map(item => (
          <div key={item._id}>
            <p>Item Name: <strong>{item.title}</strong></p>
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
