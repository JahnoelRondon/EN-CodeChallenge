import mongoose from 'mongoose';

// destructoring 
const { Schema } = mongoose;

const ItemSchema = new Schema({
  title: String,
  date: { 
    type: Date, 
    default: Date.now
  }
})

const Item = mongoose.model('Item', ItemSchema);

export {
  Item
}