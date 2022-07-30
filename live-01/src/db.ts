import { Pool } from "pg";

const connectionString = 'postgres://postgres:root@127.0.0.1:5432/microservice_pg';

const db = new Pool({ connectionString});

export default db;