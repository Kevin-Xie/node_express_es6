import ping from './ping'
import auth from './auth'
import apis from './apis'

export default app => {

	// Test if backend alive
	app.use('/ping', ping);

	// List all the api
	app.use('/api', apis);

	// Authentication
	app.use('/api/auth', auth);
	
}