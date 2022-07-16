import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '..', '.env') })

import { server } from './app'

const port = process.env.PORT || 3333
server.listen(port, () => {
  console.log(`Server open in port ${port}`)
})
