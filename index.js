     const express = require('express');
     const app = express();
     const mongoose = require('mongoose');
     require('dotenv').config();
     const port = process.env.PORT || 3000;
      const connectDB = require('./models/db');
   //   const joi = require('joi');
     const jwt = require('jsonwebtoken');
      
     
     const router = express.Router();

      //call connectDB
      connectDB();

     app.use(express.json());

   //   router.use('/ ', (req,res, next) => { 
       
   //     });

   //      const payload = {
   //       username: 'igbafesamuel@gmail.com',
   //       password: 'ssaammyy@1'
   //      };
   //      const schm = schema
   //   });
     
     app.post('/login', (req, res) => { 
        res.send('login');
     });

     app.post('/createproduct', (req, res) => {
         res.send('createproduct');
      });

     app.get('/getallproduct', (req, res) => { 

        res.send('getAllProduct');
     });

     app.get('/getsingleproduct', (req, res) => { 

            res.send('getSingleProduct');
     });

     app.put('/update', (req, res) => {
        
     });
     app.post('/updateproduct', (req, res) => {

     });
     app.delete('/delete', (req, res) => {

     });

     app.listen(port, () => {
        console.log(`server running on port:${port}`)
     })

   