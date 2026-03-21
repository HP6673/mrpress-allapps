/**
 * ============================================================
 *  tools.js  —  All Apps by MrPress
 * ============================================================
 *
 *  HOW TO ADD A TOOL:
 *    1. Build your tool and save it in the /tools/ folder
 *    2. Copy the template block below and paste it into TOOLS
 *    3. Fill in the 5 fields — that's it!
 *       The homepage card, category filter & search all update
 *       automatically. No changes to index.html ever needed.
 *
 *  FIELDS:
 *    name        — Display name on the card
 *    description — One sentence, keep it short
 *    icon        — An emoji
 *    category    — Text | Image | Math | Dev | Color | Utility
 *    url         — Path to the tool, e.g. "tools/my-tool.html"
 *
 *  TEMPLATE (copy this block):
 *  ─────────────────────────────────────────────────────────
 *  {
 *    name:        "",
 *    description: "",
 *    icon:        "",
 *    category:    "",
 *    url:         "tools/.html"
 *  },
 *  ─────────────────────────────────────────────────────────
 */

const TOOLS = [

  // ── Text ───────────────────────────────────────────────────
  {
    name:        "Word Counter",
    description: "Count words, characters, sentences and reading time instantly.",
    icon:        "📝",
    category:    "Text",
    url:         "tools/word-counter.html"
  },

  // ── Image ──────────────────────────────────────────────────
  {
    name:        "Image Converter",
    description: "Convert any image between JPG, PNG, GIF, BMP, TIFF, and WebP — right in your browser.",
    icon:        "🖼️",
    category:    "Image",
    url:         "tools/image-converter.html"
  },

  // ── ADD MORE TOOLS BELOW ───────────────────────────────────

];
