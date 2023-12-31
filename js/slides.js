import "../stylesheets/style.scss";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";

Reveal.configure({
    keyboard: {
        40: "next",
        38: "prev",
    },
    pdfSeparateFragments: false,
});
Reveal.initialize({
    hash: true,
    transition: "none",
    history: "true",
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    markdown: {
        smartypants: true,
    },
    width: 1024,
    height: 640
});
