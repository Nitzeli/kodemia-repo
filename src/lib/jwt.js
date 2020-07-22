
const jwt = require('jsonwebtoken')  
const {JWT_SECRET} = process.env

function sign (payload = {}) { // valor por defecto, objeto vacío
  return jwt.sign(payload, JWT_SECRET)
}

function verify (token = '') {
    return jwt.verify(token, JWT_SECRET)
  }

module.exports ={
    ...jwt,
    sign,
    verify
}