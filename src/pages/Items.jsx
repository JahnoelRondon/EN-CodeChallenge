import React from 'react'

export default function Items({collection}) {
  console.log(collection);
  return (
    <div>
      {
        collection && collection.map(item => (
          <div>
            <p>{item.title}</p>
            <p>{item.importance}</p>
            <p>{item.date}</p>
          </div>
        ))
      }
    </div>
  )
}
