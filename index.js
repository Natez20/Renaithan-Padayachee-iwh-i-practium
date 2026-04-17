const express = require('express');
const axios = require('axios');
const validateRecord = require('./utils/validateRecord');
require('dotenv').config();
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS;
const OBJECT_TYPE = '2-201308887';

//Route 1 - Homepage

app.get('/', async (req , res) => {
    const url = `https://api.hubapi.com/crm/v3/objects/${OBJECT_TYPE}?properties=name,quantity,purchase_date`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type' : 'application/json' 
    };

    try {
        const resp = await axios.get(url, {headers});
        const data = resp.data.results;
        res.render('homepage' , {title: 'Office Supplies | HubSpot' , data});
    } catch (error) {
        console.error(error);
    }
});

//Route 2 - Form page

app.get('/update-cobj', (req, res) => {
    res.render('updates', { title: 'Update Custom Object Form | Integrating With HubSpot I Practicum' });
});

//Route 3 - Form submission

app.post('/update-cobj' , async (req , res) => {
  
    const errors = validateRecord(req.body);

    if (errors.length > 0 ){
        return res.status(400).send(errors.join(', '));
    }


 const newRecord = {
       properties: {
            name : req.body.name,
            quantity : req.body.quantity,
            purchase_date : req.body.purchase_date
       }
 };
   const url = `https://api.hubapi.com/crm/v3/objects/${OBJECT_TYPE}`;
   const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
         'Content-Type' : 'application/json'    
   };

   try {
        await axios.post(url , newRecord , {headers});
        res.redirect('/');
   } catch (error) {
      console.error(error);
   }
});


app.listen(3000, () => console.log('Listening on http://localhost:3000'));