import "reflect-metadata";
import { config } from "dotenv";

import { AppDataSource } from "../src/db/dataSource.js";
import polkadotActions from "../src/dripper/polkadot/PolkadotActions.js";
import { createApp } from "../src/server/app.js";

config();
await AppDataSource.initialize();
await polkadotActions.isReady;

export const app = createApp();
