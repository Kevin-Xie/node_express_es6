import mongoose from 'mongoose';

let db_url = 'mongodb://localhost:27017/test';

mongoose.connect(db_url, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', (callback) => {
	console.log('connecting on db: test')
})

export default db;