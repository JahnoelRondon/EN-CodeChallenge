import './App.css';
import { useState, useEffect } from 'react';
import Items from './pages/Items.jsx';
import * as dbFunctions from './services/database.js'


function App() {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    // on load get the items from the database
    // if(collection === []) {

    // }

  })

  const items = dbFunctions.fetchAll();

  return (
    <>
      <Items collection={collection}/>
    </>
  );
}

export default App;
