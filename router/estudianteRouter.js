const express = require('express')
const estudianteController= require('../controler/EstudianteControler')


const router = express.Router();

router.get('/',estudianteController.getEstudiante)
router.post('/',estudianteController.postEstudiante)
router.put('/:idestudiante',estudianteController.putEstudiante)
router.delete('/:idestudiante',estudianteController.deleteEstudiante)


module.exports=router;