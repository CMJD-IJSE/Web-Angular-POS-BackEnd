const Customer = require('../model/CustomerSchema');

const saveCustomer = (req,resp)=>{
    const customer= new Customer({
        customerId:req.body.customerId,
        customerName:req.body.customerName,
        customerSalary:req.body.customerSalary,
        customerAddress:req.body.customerAddress
    });

    customer.save().then(result=>{
        resp.status(200).json({state:true,"message":"Saved"})
    }).catch(error=>{
        resp.status(500).json(error)
    });
}
const deleteCustomer = (req,resp)=>{
    Customer.deleteOne({customerId: req.headers.id}).then(deleteResponse=>{
        if(deleteResponse.deletedCount>0) {
            resp.status(200).json({message: "Deleted"});
        }else{
            resp.status(200).json({message: "Try Again"});
        }
    }).catch(error=>{
        resp.status(500).json(error)
    })
}
const getCustomer = (req,resp)=>{
    Customer.findOne({customerId: req.headers.id}).then(result=>{
        if(result!==null){
            resp.status(200).json({state:true, data:result});
        }else{
            resp.status(200).json({state:false});        }
    }).catch(error=>{
        resp.status(500).json(error);
    })
}
const updateCustomer = (req,resp)=>{
    Customer.updateOne(
        {customerId: req.body.id},
        {$set:{
                customerName:req.body.name,
                customerSalary:req.body.salary,
                customerAddress:req.body.address
            }}
    ).then(updateResult=>{
        if(updateResult.nModified>0){
            resp.status(200).json({message: 'Updated'});
        }else{
            resp.status(200).json({message: 'Try Again'});
        }
    }).catch(updateError=>{
        resp.status(500).json(updateError);
    })
}
const getAllCustomers = (req,resp)=>{
    Customer.find().then(result=>{
       resp.status(200).json({dataSet:result});
    }).catch(error=>{
        resp.status(500).json(error);
    });
}

module.exports={
    saveCustomer,
    deleteCustomer,
    getCustomer,
    updateCustomer,
    getAllCustomers
}
