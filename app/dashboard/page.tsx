"use client";

import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

export default function MdxLabPage() {
  const [code, setCode] = useState(`import { Button } from './ui'

# Hello MDX

Start typing to see the magic.

<CustomComponent label="Click Me" />

### Features:
- **Bold** and *Italic*
- { /* JS Expressions */ }
- Code blocks

\`\`\`javascript
console.log("Success!");
\`\`\``);

  const [htmlPreview, setHtmlPreview] = useState('');

  useEffect(() => {
    let content = code;
    content = content.replace(/^(import|export).*/gm, '');
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)(.*?)(\/?)>/g, '<span class="jsx-comp">&lt;$1 /&gt;</span>');
    content = content.replace(/\{([\s\S]*?)\}/g, '<span class="jsx-expr">{$1}</span>');
    setHtmlPreview(marked.parse(content) as string);
  }, [code]);

  return (
    <div className="mdx-editor-wrapper">
      <style jsx global>{`
        :root {
          --bg: #011627;
          --sidebar: #0b253a;
          --text: #d6deeb;
          --accent: #7fdbca;
          --border: #1d3b53;
          --code-bg: #010e17;
        }

        .mdx-editor-wrapper {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          display: flex; flex-direction: column;
          background-color: var(--bg);
          z-index: 99999;
          color: var(--text);
          /* WICHTIG: Schriftart wie im ersten Bild */
          font-family: 'Raleway', 'Segoe UI', Tahoma, sans-serif;
        }

        header {
          height: 50px;
          background: var(--sidebar);
          display: flex; align-items: center;
          padding: 0 20px;
          border-bottom: 1px solid var(--border);
          justify-content: space-between;
        }

        .container-main {
          display: flex; flex: 1;
          width: 100%; overflow: hidden;
        }

        .pane {
          flex: 1; display: flex; flex-direction: column; min-width: 0;
        }

        .pane-header {
          background: var(--sidebar);
          padding: 8px 15px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #5f7e97;
          border-bottom: 1px solid var(--border);
        }

        #editor {
          flex: 1; background: var(--bg);
          color: #addbff; border: none;
          padding: 20px;
          font-family: 'Consolas', 'Monaco', monospace;
          font-size: 14px; line-height: 1.6;
          resize: none; outline: none;
          border-right: 1px solid var(--border);
        }

        #preview {
          flex: 1;
          padding: 30px; /* Padding wie in der HTML */
          overflow-y: auto;
          background: var(--bg);
        }

        /* Markdown Styling - EXAKT wie im ersten Screenshot */
        #preview h1 { 
          color: var(--accent); 
          font-size: 1.8rem; 
          margin-top: 0; 
          margin-bottom: 15px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 5px;
        }
        
        #preview h3 {
          color: var(--accent);
          font-size: 1.2rem;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        #preview p { margin-bottom: 15px; line-height: 1.6; }

        #preview code { 
          background: var(--code-bg); 
          padding: 2px 5px; 
          border-radius: 4px; 
          color: #ecc48d; 
          font-family: monospace;
        }

        #preview pre { 
          background: var(--code-bg); 
          padding: 15px; 
          border-radius: 8px; 
          border: 1px solid var(--border); 
          overflow-x: auto; 
          margin-top: 15px;
        }

        .jsx-comp {
          background: rgba(127, 219, 202, 0.1);
          border: 1px dashed var(--accent);
          color: var(--accent);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }

        .jsx-expr { color: #c792ea; font-style: italic; }

        /* Listen-Korrektur */
        #preview ul { padding-left: 20px; margin-bottom: 15px; }
        #preview li { margin-bottom: 5px; }
      `}</style>

      <header>
        <div style={{ fontWeight: 800, color: 'var(--accent)', letterSpacing: '1px' }}>
          MDX <span style={{ color: '#fff' }}>LAB</span>
        </div>
        <div style={{ fontSize: '11px', opacity: 0.6 }}>Next.js React Preview</div>
      </header>

      <div className="container-main">
        <section className="pane">
          <div className="pane-header">Input (MDX)</div>
          <textarea
            id="editor"
            spellCheck="false"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </section>

        <section className="pane">
          <div className="pane-header">Live Preview</div>
          <div 
            id="preview" 
            dangerouslySetInnerHTML={{ __html: htmlPreview }} 
          />
        </section>
      </div>
    </div>
  );
}