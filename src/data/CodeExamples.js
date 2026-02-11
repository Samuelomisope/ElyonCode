export const codeExamples = {
    "App.jsx": `
     import { useState } from "react";
    import { ElyonCode } from "@elyoncode/ai";

    function App() {
        const [code, setCode] = useState("");

        const handleAICompletion = async () => {
            const suggestion = await ElyonCode.complete(code);
                setCode(suggestion);
        };

        return (
            <div className="app">
                <CodeEditor
                    onChange={setcode}
                    onAI={handleAICompletion}
                />
            </div>
    );
    }
    
    `,
    

"Hero.jsx": `
     import { useState } from "react";
    import { ElyonCode } from "@elyoncode/ai";

    function App() {
        const [code, setCode] = useState("");

        const handleAICompletion = async () => {
            const suggestion = await ElyonCode.complete(code);
                setCode(suggestion);
        };

        return (
            <div className="hero">
                <CodeEditor
                    onChange={setCode}
                    onAI={handleAICompletion}
                />
            </div>
    );
    }
    
    `,


"Navbar.jsx": `
     import { useState } from "react";
    import { ElyonCode } from "@elyoncode/ai";

    function App() {
        const [code, setCode] = useState("");

        const handleAICompletion = async () => {
            const suggestion = await ElyonCode.complete(code);
                setCode(suggestion);
        };

        return (
            <div className="navbar">
                <CodeEditor
                    onChange={setCode}
                    onAI={handleAICompletion}
                />
            </div>
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
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered Code Completion in real time",
        description: "The main entry point of the application, responsible for rendering the overall structure and managing global state.",
    },
    "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-300",
        contentColor: "text-purple-300",
        icon: "💫",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",
        description: "The hero section of the application, displaying key information and visual elements.",
    },
    "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🔎",
        title: "Smart Search",
        content: "Intelligent code search across your project"
        
    }

}