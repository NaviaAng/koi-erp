const AuthCtr = require('./controllers/AuthCtr')
const AuthCtrPolicy = require('./policies/AuthCthPolicy')

module.exports = (app) => {
  app.post('/register', AuthCtrPolicy.register , AuthCtr.register )
  app.post('/login', AuthCtr.login)
}