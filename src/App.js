import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import * as dbFunctions from './services/database.js'
// Components
import AllItems from './pages/AllItems.jsx'
import EditItem from './pages/EditItem.jsx';


function App() {
  const navigate = useNavigate();
  const [collection, setCollection] = useState([])
  const [mount, setMount] = useState(false)

  const handleCreate = formData => {
    // make a variable and use the form data as a parameter value for creating with the backend
    // add the state to the items array using spread operator and the variable
    // rerender to the show all page
    dbFunctions.create(formData)
    .then(item => setCollection([...collection, item]))
  }

  const handleEdit = (formData) => {
    // return the updated item, 
    //  make a new array that checks for the same object id and replace it with updated item
    dbFunctions.update(formData)
    .then(updatedItem => {
      const newCollection = collection.map(item => 
        item._id === updatedItem._id ? updatedItem : item
      );

      setCollection(newCollection)
      navigate('/')
    })
    // redirect back to '/'
  }

  const handleDelete = id => {
    dbFunctions.delete(id)
    .then(deletedItem => {
      setCollection(collection.filter(item => item._id !== deletedItem._id))
    })
  }

  useEffect(() => {
    // on load get the items from the database
    // set mount variable to stop effect from infinite chain
    if(collection.length === 0 && !mount) {
      dbFunctions.fetchAll()
      .then(data => setCollection(data))
      setMount(true)
    }
    console.log('effect ran');
  },[setCollection, collection])

  return (
    <div className='container'>
      <Routes>

        <Route path="/" element={
          <AllItems 
            collection={collection} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit}
            handleCreate={handleCreate}
          />
        }
        />

        <Route path='/edit' element={<EditItem handleEdit={handleEdit}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
