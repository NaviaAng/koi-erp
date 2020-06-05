const Joi = require('joi')

module.exports = {
  register(req, res, next){
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        // new RegExp('^[a-zA-Z0-9]{8,32}$')
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#._\$%\^&\*])(?=.{8,})')
      )
    }

    const {error,value} = Joi.validate(req.body, schema)
    if (error){
      switch (error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'Email tidak valid'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password tidak sesuai ketentuan
            <br>
            1. Password harus memiliki  huruf kecil, huruf besar, angka dan tanda baca.
            <br>
            2. Panjang password lebih dari 8 kareakter.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Registrasi belum valid'
          })
      }
    }else{
      next()
    }

  }
}