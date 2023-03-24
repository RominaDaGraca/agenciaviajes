import express from 'express';
const router= express.Router();

router.get('/inicio', (req,res)=>{ // req -lo que enviamos, res-lo que nos envian
    res.render('inicio');
});
router.get('/nosotros', (req,res)=>{ // req -lo que enviamos, res-lo que nos envian
    res.render('nosotros');
});


export default router;
