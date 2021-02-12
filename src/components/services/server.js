const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/components/services/auth.json')
const middlewares = jsonServer.defaults()
const fetch = require('node-fetch')
require('dotenv').config()


function fetchAuth() {

    fetch('https://api.symbl.ai/oauth2/token:generate', {
        method: 'post',
        body: JSON.stringify({
            "type":"application",
            "appId":process.env.REACT_APP_SYMBL_APP_ID,
            "appSecret":process.env.REACT_APP_SYMBL_APP_SECRET
        }),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
        return data.accessToken
    }).then(data => {

        fetch('http://localhost:8080/tokens/0', {
            method: 'put',
            body: JSON.stringify({"id":0,"accessToken":data}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => console.log(res.status))
    }).catch(error => console.log(error))
}

server.use(middlewares)
server.use(router)
server.listen(8080, () => {
    console.log('JSON token Server is running')
    fetchAuth()
})







