import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: String,
	password: String,
	phoneNumber: Number,
	createDate: Date,
});

const User = mongoose.model('User', UserSchema);

export default User;