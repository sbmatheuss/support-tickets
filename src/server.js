import http from "node:http"

import { jsonHandler} from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(request, response) {
  await jsonHandler(request, response)
  routeHandler(request, response)
  console.log('Servidor ativo na porta 3333' ) 
}

http.createServer(listener).listen(3333)