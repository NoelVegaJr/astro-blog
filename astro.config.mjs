import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    mdx({
      // `syntaxHighlight` inherited from Markdown

      // Markdown `remarkPlugins` ignored,
      // only `remarkPlugin2` applied.
      // extendMarkdownConfig: false,
      remarkPlugins: [remarkPlugin2],
      // `gfm` overridden to `false`
      gfm: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["javascript"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
