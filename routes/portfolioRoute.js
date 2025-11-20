const router = require('express').Router();
const {Intro, About, Experience, Contact, Course, Project} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async(req, res)=>{
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const courses = await Course.find();
        const experiences = await Experience.find();
        const contacts = await Contact.find();
        
        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            contact: contacts[0],
            projects: projects,
            experiences:experiences,
            courses: courses,
        })
    } catch (error) {}
});

module.exports = router;