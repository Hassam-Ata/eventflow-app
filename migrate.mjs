import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import pg from 'pg';

const client = new pg.Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'eventflowapp',
  password: 'eventflow_password',
  database: 'eventflowapp',
  ssl: false,
});

await client.connect();
console.log('Connected!');

const db = drizzle(client);

await migrate(db, { migrationsFolder: './drizzle/migrations' });
console.log('Migration done!');

await client.end();