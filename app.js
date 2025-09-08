   // Require Libraries
   const express = require('express');

   // App Setup
   const app = express();

   // Middleware
   const handlebars = require('express-handlebars');

   const hbs = handlebars.create({
       helpers: {
           foo() { return 'FOO!'; },
           bar() { return 'BAR!'; }
       }
   });

   app.engine('handlebars', hbs.engine);
   app.set('view engine', 'handlebars');
   app.set('views', './views');

   // Routes
   app.get('/', (req, res) => {
     console.log(req.query) // => "{ term: hey" }
     res.render('home')
   })

   // Tenor API
      const Tenor = require("tenorjs").client({
     "Key": "TENOR_API_KEY", // Replace with your actual API key
     "Filter": "high",
     "Locale": "en_US",
   });

   // Start Server
   app.listen(3000, () => {
     console.log('Gif Search listening on port localhost:3000!');
   });