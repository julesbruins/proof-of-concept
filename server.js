import express from 'express'
import { Liquid } from 'liquidjs';
 
const app = express()
 
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
 

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')



app.get('/', function (request, response) {
    response.render('index.liquid')
})


// ALLE WERKNEMERS
app.get('/:role', async function (request, response) {
    const role = request.params.role
    console.log(role)
    const dynamicRole = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${role}`)
    const dynamicRoleJSON = await dynamicRole.json()

    const messages = await fetch(`https://fdnd.directus.app/items/messages?filter={%22for%22:{%22_contains%22:%22jules-sprint-12_a_%22}}&sort=-created`)
    const messagesJSON = await messages.json()

    response.render('dashboard.liquid', {
      roles: dynamicRoleJSON.commonData,
      roleSpecificData: dynamicRoleJSON.roleSpecificData,
      messages: messagesJSON.data
    })
})


// SPECIFICS ROUTES
app.get('/mechanic/maintenance-schedule', async function (request, response) {
  const mechanic = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=mechanic`)
  const mechanicJSON = await mechanic.json()

  response.render('maintenance.liquid', {
      mechanic: mechanicJSON.roleSpecificData
  })
})
app.get('/mechanic/assigned-repair-jobs', async function (request, response) {
  const mechanic = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=mechanic`)
  const mechanicJSON = await mechanic.json()

  response.render('repair.liquid', {
    mechanic: mechanicJSON.roleSpecificData
  })
})
app.get('/mechanic/system-diagnostic-data', async function (request, response) {
  const mechanic = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=mechanic`)
  const mechanicJSON = await mechanic.json()

  response.render('diagnostic.liquid', {
    mechanic: mechanicJSON.roleSpecificData
  })
})
app.get('/mechanic/technical-manual-links', async function (request, response) {
  const mechanic = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=mechanic`)
  const mechanicJSON = await mechanic.json()

  response.render('links.liquid', {
    mechanic: mechanicJSON.roleSpecificData
  })
})



// POST 
app.post('/:role', async function (request, response) {
  const role = request.params.role
  const dynamicRole = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${role}`)
  const dynamicRoleJSON = await dynamicRole.json()
  
  await fetch('https://fdnd.directus.app/items/messages', {      // Je stuurt de message naar deze API
    method: 'POST',                                              // Je gebruikt de POST methode
    body: JSON.stringify({
      from: `${request.body.name}`,                             // Ik gebruikt uit database from & text (jules-sprint-12_ zorgt ervoor dat alleen mijn messages gebruikt worden)
      for: `jules-sprint-12_a_${role}`,
      text: request.body.message                                // text zorgt ervoor dat in het 'text' veld in database de geposte content komt
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  response.redirect(303, `/${role}`)         // zorgt ervoor dat je na de post succesvol doorgelijdt wordt naar de pagina waar de berichten voor die specifieke opdracht worden weergegeven.
})  




// SET PORT
app.set('port', process.env.PORT || 8000)
 
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})
