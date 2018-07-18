import mongoose from 'mongoose';
import crypto from 'crypto';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: {
		type: String
	},

	phoneNumber: {
		type: Number
	},

	email: {
		type: String,
		lowercase: true
	},

	password: {
		type: String
	},

	salt: {
		type: String
	},

	updateDate: {
		type: Date,
		default: Date.now
	},

	createDate: {
		type: Date,
		default: Date.now
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