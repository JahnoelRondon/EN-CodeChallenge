import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

export default function EditItem(props) {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state)
  const [mount, setMount] = useState(false)
  
  const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

  const handleSubmit = e => {
		e.preventDefault()
    console.log(formData)
    // update function from app.js, make it rerender/render back to "/"
	}

  // changes the format to YYYY/MM/dd and joins with - for input value
  function formatDate(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

      if (month.length < 2) 
        month = '0' + month;
      if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  useEffect(() => {
    // initial formatting for date value
    if(!mount){
      formData.date = formatDate(formData.date.slice(0, 15))
      setMount(true)
    }
  })

  return (
    <div>
      <h3>Edit Item</h3>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <label htmlFor="title_input">Title:</label>
        <input value={formData.title} placeholder='Title' name='title' id='title_input' onChange={handleChange} required></input> <br/>

        <label htmlFor="importance_input">Importance:</label>
        <select value={formData.importance} name='importance' id='importance_input' onChange={handleChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>  <br/>

        <label htmlFor="date_input">Date:</label>
        <input value={formData.date} type="date" name='date' id='date_input' onChange={handleChange} required/>  <br/>

        <button>Submit</button>
      </form>
    </div>
  )
}
