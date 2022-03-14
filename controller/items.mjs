import {Item} from './../models/Items.mjs'

function index(req, res) {
  Item.find({})
  .then(allItems => res.send(allItems))
  .catch(err => res.send(err))
}

function create(req, res) {
  Item.create(req.body)
  .then(item => res.send(item))
  .catch(err => res.send({message: err}))
}

function update(req, res) {
  Item.findByIdAndUpdate(req.params.itemId, req.body, {next: true})
  .then(() => {
    // redirect to the detail view of the specific item after updating
    res.redirect(`/items`)
  })
}

function deleteitem(req, res) {
  Item.findByIdAndDelete(req.params.itemId)
  .then(deletedItem => res.send(deletedItem))
  .catch(err => res.send(err));
}

function show(req, res){
  Item.findById(req.params.itemId)
  .then(item => res.send(item))
  .catch(err => res.send({message: err}))
}

export {
  index,
  create,
  update,
  deleteitem as delete,
  show
}
