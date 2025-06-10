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

app.get('/:role', async function (request, response) {
    const role = request.params.role
    const dynamicRole = await fetch(`https://fdnd-fresk-api.netlify.app/get-content-by-role?userRole=${role}`)
    const dynamicRoleJSON = await dynamicRole.json()

    response.render('dashboard.liquid', {
      roles: dynamicRoleJSON.commonData,
      roleSpecificData: dynamicRoleJSON.roleSpecificData,
    })
})


app.set('port', process.env.PORT || 8000)
 
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})
