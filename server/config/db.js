import mongoose from 'mongoose';

let db_url = 'mongodb://localhost:27017/test';

let options = {
	useNewUrlParser: true
}

mongoose.connect(db_url, options)
	.then(() => {
		console.log(`connecting on DB: ${db_url}`);
	})
	.catch( err => console.error('connection error'));


export default mongoose.connection;