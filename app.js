   // Require Libraries
   const express = require('express');

   // App Setup
   const app = express();

  // Tenor API
  const Tenor = require("tenorjs").client({
    "Key": "AIzaSyDU79S1tNtcVPjqgjfVB1TP27hb3WU1XI8",
    "Filter": "high",
    "Locale": "en_US",
  });

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
      // Handle the home page when we haven't queried yet
      let term = "";
      if (req.query.term) {
          term = req.query.term;
      }

      // Only search if we have a search term
      if (term && term.trim() !== "") {
          // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
          Tenor.Search.Query(term, "10")
              .then(response => {
                  // store the gifs we get back from the search
                  const gifs = response;
                  // pass the gifs as an object into the home page
                  res.render('home', { gifs, term });
              })
              .catch(console.error);
      } else {
          // No search term, just render the home page without gifs
          res.render('home', { term });
      }
  });

   // Start Server
   app.listen(3000, () => {
     console.log('Gif Search listening on port localhost:3000!');
   });