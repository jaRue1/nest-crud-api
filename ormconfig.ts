import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions"
const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: [
    'dist/src/db/migration/*.js'
  ],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
}
export default config;