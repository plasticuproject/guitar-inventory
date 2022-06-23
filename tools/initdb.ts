import dotenv from 'dotenv'
import fs from 'fs-extra'
import { Client } from 'pg'

const init = async () => {
  // Read environment variables
  dotenv.config()
  // Create an instance of the PostgreSQL client
  const client = new Client()
  try {
    // Connect to the local database server
    await client.connect()
    // Read the contents of the initdb.pgsql file
    const sql = await fs.readFile('./tools/initdb.pgsql', { encoding: 'UTF-8' })
    // Split the file into seperate statements
    const statements = sql.split(/;s*$/m)
    for (const statement of statements) {
      if (statement.length > 3) {
        // Execute each of the statements
        await client.query(statement)
      }
    }
  } catch (err) {
    console.log(err)
    throw err
  } finally {
    // Close the database client
    await client.end()
  }
}

init().then(() => {
  console.log('finished')
}).catch(() => {
  console.log('finished with errors')
})
