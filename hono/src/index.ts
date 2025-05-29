import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import notes from "./routes.ts"
// jangan lupa import dari file routes.ts

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//untuk routing
app.route("/notes", notes);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
