function fetchAll(){
  return (
    fetch('http://localhost:3001/items')
    .then(res => res.json())
    .then(data => console.log(data))
  )
}

export {
  fetchAll
}