import "../styles/slides.scss";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";

const slides = new Reveal({
  controls: "speaker-only",
  slideNumber: "h/v",
  showSlideNumber: "speaker",
  hash: true,
  history: true,
  transition: "none",
  defaultTiming: null, // Figure out pace for 50 minute presentation
  pdfSeparateFragments: false,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
  markdown: {
    smartypants: true,
    breaks: true,
    gfm: true,
  },
  center: false,
  width: 1280,
  height: 800,
  margin: 0.2,
});

slides.initialize();
