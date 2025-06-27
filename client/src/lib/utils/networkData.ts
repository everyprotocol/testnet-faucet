import { base } from "$app/paths";
import { PUBLIC_FAUCET_URL } from "$env/static/public";

export interface ChainData {
  name: string;
  id: number;
}

function faucetUrl(defaultUrl: string): string {
  if (PUBLIC_FAUCET_URL !== "") {
    return PUBLIC_FAUCET_URL;
  }

  return defaultUrl;
}

export interface NetworkData {
  networkName: string;
  currency: string;
  chains: ChainData[];
  endpoint: string;
  explorer: string | null;
  teleportEnabled: boolean;
}

export const EveryTestnet: NetworkData = {
  networkName: "Every Testnet",
  currency: "EVERY",
  chains: [
    { name: "Sepolia", id: 0 },
    { name: "Base Sepolia", id: 1 },
  ],
  endpoint: faucetUrl("http://localhost:5555/drip/web"),
  explorer: null,
  teleportEnabled: true,
};

export const EveryDevelopment: NetworkData = {
  networkName: "Every Development",
  currency: "EVERY",
  chains: [{ name: "Anvil", id: 0 }],
  endpoint: faucetUrl("http://localhost:5555/drip/web"),
  explorer: null,
  teleportEnabled: true,
};

export const Networks: { network: NetworkData; url: string }[] = [
  { network: EveryTestnet, url: (base as string) || "/" },
  { network: EveryDevelopment, url: (base as string) || "/development" },
];

export function getChainName(network: NetworkData, id: number): string | null {
  const index = network.chains.findIndex((ch) => ch.id === id);
  if (index < 0) {
    return null;
  }
  return network.chains[index].name;
}
