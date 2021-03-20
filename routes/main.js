// routing for the landing.mustache page
// 'data' on this JS file comes from 'landing.json'
const express = require('express')
const ProjectController = require('../controllers/ProjectController')
const router = express.Router()
const projectController = require('../controllers/ProjectController')

router.get('/', (req, res) => {
    const data = req.context
    const projectCtr = new ProjectController()
    
    projectCtr.get()
    .then(projects => {
        console.log('Projects: ' + JSON.stringify(projects))
        res.render('landing', data)
    }) .catch(err => {
        res.send("Oops!"+err.message)
    })

})

module.exports = router