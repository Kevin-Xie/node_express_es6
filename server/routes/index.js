import home from './home'
import auth from './auth'

export default app => {

	app.use('/', home);

	app.use('/auth', auth);
	
}