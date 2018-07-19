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
}, {
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
});



UserSchema.pre('save', function(next){
	if(this.password && this.isModified('password')) {
		this.salt = crypto.randomBytes(16).toString('base64');
		this.password = this.hashPassword(this.password);
	}
	next();
})

UserSchema.methods.hashPassword = function(password) {
	if(this.salt && this.password) {
		return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64, 'SHA1').toString('base64');
	}
	return password;
}



const User = mongoose.model('User', UserSchema);

export default User;