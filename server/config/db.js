const config = require('config');
import mongoose from 'mongoose';

let options = {
	useNewUrlParser: true
}

mongoose.connect(config.db.uri, options)
	.then(() => {
		console.log(`connecting on DB: ${config.db.uri}`);
	})
	.catch( err => console.error('connection error'));


export default mongoose.connection;