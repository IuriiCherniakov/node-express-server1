import mongoose from 'mongoose';

//const { Schema } = mongoose;
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: String,
    password: String,

})

export default mongoose.model('User', userSchema);
