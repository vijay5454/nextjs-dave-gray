import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";

//We are using dotenv coz drizzle will run outside the nextjs capability.
config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

//logging every sql command is gonna run
//const db = drizzle(sql, {logger:true});

const db = drizzle(sql);

export { db };
