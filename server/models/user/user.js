import mongoose from 'mongoose';
import crypto from 'crypto';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: {
		type: String
	},
	password: {
		type: String
	},
	phoneNumber: {
		type: Number
	},
	salt: {
		type: String
	},
	createDate: {
		type: Date
	},
});



UserSchema.pre('save', function(next){
	if(this.password && this.isModified('password')) {
		this.salt = crypto.randomBytes(16).toString('base64');
		this.password = this.hashPassword(this.password);
	}
	next();
})

UserSchema.methods.hashPassword = function(password) {
	return password;
}



const User = mongoose.model('User', UserSchema);

export default User;