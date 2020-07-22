
const express = require('express')

const koders = require('../useCases/koders')
const { request } = require('../server')
const { response } = require('express')

const router = express.Router()

// /auth/sign-up

router.post('/sign-up',async (request, response) => {
    try {
        const signedUpKoder = await koders.signup (request.body)
        response.json({
            success:true,
            data: {
                signedUpKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
    
})

router.post('/sign-in', async (request, response) => {
    try {
        const{ password , email } = request.body
        const token = await koders.login(email, password)
        response.json ({
            success: true,
            data:{
                token
            }
        })
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router