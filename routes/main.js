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
        data['projects'] = projects
        console.log('Projects: ' + JSON.stringify(projects))
        res.render('landing', data)
    }) .catch(err => {
        res.send("Oops!"+err.message)
    })

})

// Renders pages for individual projects
router.get('/project/:slug', (req, res) => {
    const data = req.context
    const projectSlug = req.params.slug
    
    
    const projectCtr = new ProjectController()
    projectCtr.get({slug:projectSlug})
    .then(projects => {
        if(projects.length == 0){
            throw new Error('Project not found.')
            return
        }
        const project = projects[0]
        data['project'] = project
        res.render('project', data)
    })
    .catch(err => {
        res.send("ERROR:" +err.message)
    })
})

module.exports = router