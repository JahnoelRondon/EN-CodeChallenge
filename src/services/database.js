// show all
function fetchAll(){
  return (
    fetch('http://localhost:3001/items')
    .then(res => res.json())
  )
}

function create(formData){
  return fetch('http://localhost:3001/items', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
}

function deleteItem(objectId){
  return fetch(`http://localhost:3001/items/${objectId}`, {method: 'DELETE'})
  .then(res => res.json())
}

function update(formData){
  return fetch(`http://localhost:3001/items/${formData._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
}

export {
  fetchAll,
  create,
  deleteItem as delete,
  update
}