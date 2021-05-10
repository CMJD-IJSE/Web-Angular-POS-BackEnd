const express = require('express');
const customerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/saveCustomer',customerController.saveCustomer);
router.delete('/deleteCustomer',customerController.deleteCustomer);
router.get('/getCustomer',customerController.getCustomer);
router.put('/updateCustomer',customerController.updateCustomer);
router.get('/getAllCustomers',customerController.getAllCustomers);

module.exports=router;
