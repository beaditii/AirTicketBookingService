const express=require('express');
const {BookingController} = require('../../controllers/index');
const router=express.Router();
// const { createChannel }=require('../../utils/messageQueue');


const bookingController = new BookingController();

router.get('/info',(req,res)=>{
    return res.json({
        message:'Response from routes'
    });
})
router.post('/bookings',bookingController.create);
router.post('/publish', bookingController.sendMessageToQueue);

module.exports=router;