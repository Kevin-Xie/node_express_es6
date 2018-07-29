const config = require('config');
import mongoose from 'mongoose';

let options = {
	useNewUrlParser: true
}

mongoose.connect(config.db.uri, options)
	.then(() => {
		console.log(`connecting on DB: ${config.db.uri}`);
	})
	.catch( err => {
		mongoose.disconnect();
		console.error('connection error');
		throw new Error(err);
	});


export default mongoose.connection;