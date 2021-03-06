import React from 'react'
import { useState } from 'react'

export default function AddItem({handleCreate}) {
  const [formData, setData] = useState({
    title: '',
    price: 0,
    // set the importance due to select
    importance: 'High',
    date: ''
  })

  const handleChange = (e) => {
    setData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData);
    handleCreate(formData)
  }

  return (
    <>
      <h3>Add Item</h3>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <label htmlFor="title_input">Title:</label>
        <input placeholder='Title' name='title' id='title_input' onChange={handleChange} required></input> <br/>

        <label htmlFor="price_input">Price:</label>
        <input type="number" name='price' id='price_input' onChange={handleChange} required/>  <br/>

        <label htmlFor="importance_input">Importance:</label>
        <select name='importance' id='importance_input' onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>  <br/>

        <label htmlFor="date_input">Date:</label>
        <input type="date" name='date' id='date_input' onChange={handleChange} required/>  <br/>

        <button>Submit</button>
      </form>
    </>
  )
}
