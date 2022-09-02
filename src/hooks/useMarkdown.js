import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/foundation.css'; 

export default function richText() {
    const render = new marked.Renderer();
    marked.setOptions({
        renderer: render,
        gfm: true,
        pedantic: false,
        sanitize: false,

        highlight: (code, lang) => hljs.highlight(code, { language: lang }).value
    })
}