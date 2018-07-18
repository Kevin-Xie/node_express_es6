const expect = require('chai').expect;
const mongoose = require('mongoose');
import user from '../../controllers/admin/admin';

describe('test user api', function() {
    before(function(done) {
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}, function(err) {
            if (err) throw new Error(err);
            else console.log('connection established');
            done();
        })
    });

    after(function(done) {
        mongoose.disconnect(done);
    })

    it('findByUserName', function(done) {
        let userName = 'kevin';
        user.findByUserName(userName)
        .then(data => {
            expect(data.userName).to.be.equal('kevin');
        })
        .then(done)
    });

    it.only('createNewUser', function(done) {
        let newUser = {
			userName: 'testName',
			password: 'testPassword',
		}
        user.createNewUser(newUser)
        .then(function(data) {
            expect(data.userName).to.be.equal('testName');
            expect(data.password).to.be.equal('testPassword');
        })
        .then(done);
    })
})