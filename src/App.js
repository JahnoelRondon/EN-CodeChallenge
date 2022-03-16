import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import * as dbFunctions from './services/database.js'
// Components
import AllItems from './pages/AllItems.jsx'
import EditItem from './pages/EditItem.jsx';


function App() {
  const [collection, setCollection] = useState([])

  const handleCreate = formData => {
    // make a variable and use the form data as a parameter value for creating with the backend
    // add the state to the items array using spread operator and the variable
    // rerender to the show all page
    dbFunctions.create(formData)
    .then(item => setCollection([...collection, item]))
  }

  const handleEdit = (formData) => {
    dbFunctions.update(formData)
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
    if(collection.length === 0) {
      dbFunctions.fetchAll()
      .then(data => setCollection(data))
    }

  },[setCollection, collection])

  return (
    <>
    {/* use Navbar and react router to switch between components */}
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
    </>
  );
}

export default App;
