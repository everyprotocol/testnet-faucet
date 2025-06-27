<script lang="ts">
  import socialImage from "$lib/assets/polkadot.png";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Every Faucet"
  description="A fast and reliable Polkadot testnet faucet for blockchain developers."
  openGraph={{
    images: [{ url: socialImage }],
  }}
  twitter={{
    title: "Every Faucet",
    description: "A fast and reliable Substrate testnet faucet for blockchain developers.",
    image: socialImage,
    imageAlt: "Every Faucet Website",
  }}
/>
