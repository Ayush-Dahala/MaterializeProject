const express=require('express');
const Router=express.Router();
const {getTableData,addTableData,deleteData,updateData}=require('../Controller/tableController') 

Router.route('/').get(getTableData).post(addTableData)
Router.route('/:id').delete(deleteData).patch(updateData)

module.exports=Router;