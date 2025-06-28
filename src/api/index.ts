import "reflect-metadata";
import { config } from "dotenv";

import { AppDataSource } from "../db/dataSource.js";
import polkadotActions from "../dripper/polkadot/PolkadotActions.js";
import { createApp } from "../server/app.js";

config();
await AppDataSource.initialize();
await polkadotActions.isReady;

export const app = createApp();
