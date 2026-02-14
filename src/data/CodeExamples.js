export const codeExamples = {
  "App.jsx": `
    import { useState } from "react";
    import { ElyonCode } from "@elyoncode/ai";

    function App() {
      const [code, setCode] = useState("");
      const [output, setOutput] = useState("");

      const handleRun = async () => {
        const result = await ElyonCode.run(code);
        setOutput(result);
      };

      return (
        <div className="app">
          <CodeEditor
            value={code}
            onChange={setCode}
          />
          <button onClick={handleRun}>Run Code</button>
          <pre>{output}</pre>
        </div>
      );
    }
  `,

  "Hero.jsx": `
    import { useState } from "react";
    import { ElyonCode } from "@elyoncode/ai";

    function Hero() {
      const [snippet, setSnippet] = useState("");

      const handleGenerateSnippet = async () => {
        const suggestion = await ElyonCode.snippet("hero-section");
        setSnippet(suggestion);
      };

      return (
        <div className="hero">
          <button onClick={handleGenerateSnippet}>Generate Hero Snippet</button>
          <CodePreview code={snippet} />
        </div>
      );
    }
  `,

  "Navbar.jsx": `
    import { useState } from "react";
    import { ElyonCode } from "@elyoncode/ai";

    function Navbar() {
      const [links, setLinks] = useState([]);

      const handleSuggestLinks = async () => {
        const suggestion = await ElyonCode.suggest("navigation");
        setLinks(suggestion);
      };

      return (
        <nav className="navbar">
          <button onClick={handleSuggestLinks}>AI Suggest Links</button>
          <ul>
            {links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </nav>
      );
    }
  `,
};


export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-300",
    contentColor: "text-blue-300",
    icon: "⚡",
    title: "Run Code",
    content: "Execute and preview output instantly",
    description:
      "The main entry point of the application, responsible for running code and displaying results.",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-300",
    contentColor: "text-purple-300",
    icon: "💫",
    title: "Snippet Generator",
    content: "AI-generated hero section snippets",
    description:
      "The hero section of the application, showcasing dynamic snippets and visual highlights.",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔎",
    title: "Link Suggestions",
    content: "AI-powered navigation link recommendations",
    description:
      "The navigation bar of the application, providing quick access with intelligent link suggestions.",
  },
};
