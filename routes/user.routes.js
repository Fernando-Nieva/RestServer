const {Router}= require ('express');
const { usersPut, 
    usersPost,
    usersDelete,
    usersPatch, 
    usersGet } = require('../controllers/user.controller');
const router = Router();

router.get('/',usersGet);

router.put('/:id',usersPut);

router.post('/',usersPost);

router.patch('/',usersPatch)

router.delete('/',usersDelete);

module.exports=router;