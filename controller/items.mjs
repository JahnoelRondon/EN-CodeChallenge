import {Item} from './../models/Items.mjs'

function index(req, res) {
  res.send('You re on items')
}

function create(req, res) {

  Item.create(req.body)
  .then(item => res.send(item))
  .catch(err => res.send({message: err}))

}

function update(req, res) {
  
}

function deleteitem(req, res) {
  
}

export {
  index,
  create,
  update,
  deleteitem as delete
}