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
    const dynamicRole = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${role}`)
    const dynamicRoleJSON = await dynamicRole.json()

    // const mechanic = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=mechanic`)
    // const mechanicJSON = await mechanic.json()

    // console.log(mechanicJSON)

    response.render('dashboard.liquid', {
      roles: dynamicRoleJSON.commonData,
      roleSpecificData: dynamicRoleJSON.roleSpecificData,
      // mechanic: mechanicJSON.roleSpecificData
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


// SET PORT
app.set('port', process.env.PORT || 8000)
 
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})
