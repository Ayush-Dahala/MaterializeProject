const express=require('express');
const Router=express.Router();
const {getAllUser,createAllUser,getUser,updateUser,deleteUser}=require('../Controller/userController')
const {signup,login,protect}=require('../Controller/authController')

Router.post('/signup',signup)
Router.post('/login',login)

Router.route('/').get(protect,getAllUser).post(createAllUser)
Router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


module.exports=Router
