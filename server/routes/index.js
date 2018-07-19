import home from './home'
import admin from './admin'

export default app => {

	app.use('/', home);

	app.use('/auth', admin);
	
}