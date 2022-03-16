import mongoose from 'mongoose';

// destructoring 
const { Schema } = mongoose;

const ItemSchema = new Schema({
  title: String,
  price: Number,
  importance: {
    type: String,
    enum: ['High', 'Medium', 'Low']
  },
  date: { 
    // automatically converted into UTC
    type: Date, 
  }
})

const Item = mongoose.model('Item', ItemSchema);

export {
  Item
}
