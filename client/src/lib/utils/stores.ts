import { writable } from "svelte/store";

import { EveryTestnet, type NetworkData } from "./networkData";

// Defaults to EveryTestnet, being updated in Faucet.svelte
export const testnet = writable<NetworkData>(EveryTestnet);

interface FaucetOperation {
  success: boolean;
  hash: string;
  error?: string;
}

export const operation = writable<FaucetOperation>();
