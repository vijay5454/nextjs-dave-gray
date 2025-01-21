import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "db/migrations",
    });
    console.log("Migration completed.");
  } catch (error) {
    console.error("Error happened while migration: ", error);
    process.exit(1);
  }
};

main();
