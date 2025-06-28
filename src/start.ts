import "reflect-metadata";

import { AppDataSource } from "./db/dataSource.js";
import polkadotActions from "./dripper/polkadot/PolkadotActions.js";
import { createApp } from "./server/app.js";

(async () => {
  await AppDataSource.initialize();
  await polkadotActions.isReady;
  createApp();
})().catch((e) => {
  console.error("Start failed:", e);
  process.exit(1);
});
