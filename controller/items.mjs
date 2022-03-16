import {Item} from './../models/Items.mjs'

function index(req, res) {
  Item.find({})
  .then(allItems => res.status(200).json(allItems))
  .catch(err => res.send(err))
}

function create(req, res) {
  Item.create(req.body)
  .then(item => res.status(200).json(item))
  .catch(err => res.send({message: err}))
}

function update(req, res) {
  Item.findByIdAndUpdate(req.params.itemId, req.body, {next: true})
  .then((item) => res.json(item))
}

function deleteitem(req, res) {
  Item.findByIdAndDelete(req.params.itemId)
  .then(deletedItem => res.json(deletedItem))
  .catch(err => res.send(err));
}

function show(req, res){
  Item.findById(req.params.itemId)
  .then(item => res.status(200).json(item))
  .catch(err => res.send({message: err}))
}

export {
  index,
  create,
  update,
  deleteitem as delete,
  show
}
