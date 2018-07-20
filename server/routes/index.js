import home from './home'
import auth from './auth'
import allApi from './allApi'

export default app => {

	app.use('/', home);

	app.use('/api', allApi);

	app.use('/api/auth', auth);
	
}