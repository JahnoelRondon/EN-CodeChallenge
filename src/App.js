import './App.css';
import { useState, useEffect } from 'react';
import * as dbFunctions from './services/database.js'
// Components
import Items from './pages/Items.jsx';
import AddItems from './pages/AddItem.jsx';


function App() {
  const [collection, setCollection] = useState([])

  // handleCreate = formData => {
  //   // make a variable and use the form data as a parameter value for creating with the backend
  //   // add the state to the items array using spread operator and the variable
  //   // rerender to the show all page
  // }

  useEffect(() => {
    // on load get the items from the database
    if(collection.length === 0) {
      console.log('ran effect');

      dbFunctions.fetchAll()
      .then(data => setCollection(data))

    }

  },[setCollection, collection])


  return (
    <>
      <Items collection={collection}/>
    </>
  );
}

export default App;
