import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */

const config = {
  preprocess: [preprocess({ postcss: true })],
  onwarn: (warning, handler) => {
    if (warning.code === "css-unused-selector") {
      return;
    }
    handler(warning);
  },

  kit: {
    adapter: adapter(),
    paths: { base: process.env.BASE ?? "", relative: !process.env.BASE },
  },
};

export default config;
