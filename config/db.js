import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', (callback) => {
	console.log('connecting on db: test')
})

export default db;