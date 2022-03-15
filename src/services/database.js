function fetchAll(){
  return (
    fetch('http://localhost:3001/items')
    .then(res => res.json())
  )
}

// create

// update

// delete

export {
  fetchAll
}