"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
    open: boolean;
}

interface ChatMessage {
    role: "user" | "assistant";
    text: string;
}

export default function ChatWindow({ open }: Props) {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "assistant",
            text: "Hi! I'm Achesomie's AI assistant. Ask me anything about his projects, technical skills, education, or career journey.",
        },
    ]);

    const suggestedQuestions = [
        "Tell me about Vault AI",
        "Explain TalentMatch AI",
        "What is SentinelAI?",
        "What are my technical skills?",
    ];

    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMessage: ChatMessage = {
            role: "user",
            text: message,
        };

        setMessages((prev) => [...prev, userMessage]);
        setMessage("");
        setLoading(true);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

            if (!apiUrl) {
                throw new Error("NEXT_PUBLIC_API_URL is not configured.");
            }

            const res = await fetch(`${apiUrl}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question: userMessage.text,
                }),
            });

            if (!res.ok) {
                throw new Error(`Chat API returned HTTP ${res.status}`);
            }

            const data = await res.json();

            if (typeof data.answer !== "string") {
                throw new Error("The chat API returned an invalid response.");
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: data.answer,
                },
            ]);
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: "Sorry, something went wrong while contacting the AI.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.8,
                        y: 40,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="
            fixed
            bottom-28
            right-8
            z-[999]
            flex
            h-[650px]
            w-[420px]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#102A25]/95
            shadow-2xl
            backdrop-blur-xl
          "
                >
                    {/* Header */}

                    <div className="border-b border-white/10 p-6">
                        <h2 className="text-xl font-bold text-white">
                            AI Assistant
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Ask me anything about my projects, experience or skills.
                        </p>
                    </div>

                    {/* Chat */}

                    <div className="flex-1 overflow-y-auto space-y-5 p-6">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl p-4 ${msg.role === "assistant"
                                        ? "rounded-tl-md border border-[#F7BD53]/25 bg-[#F7BD53]/10"
                                        : "rounded-tr-md bg-gradient-to-r from-[#F7BD53] to-[#F7BD53]"
                                        }`}
                                >
                                    <p className="mb-2 text-xs font-semibold opacity-70">
                                        {msg.role === "assistant"
                                            ? "AI Assistant"
                                            : "You"}
                                    </p>

                                    {msg.role === "assistant" ? (
                                        <div className="text-sm leading-7 text-white [&_p]:mb-2 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-white [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ol]:mb-2 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_li]:pl-1 [&_h1]:mb-2 [&_h1]:text-lg [&_h1]:font-bold [&_h2]:mb-2 [&_h2]:text-base [&_h2]:font-bold [&_h3]:mb-1 [&_h3]:font-semibold [&_a]:text-[#F7BD53] [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-[#F7BD53]/50 [&_blockquote]:pl-3">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {msg.text}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        <p className="text-sm leading-7 text-white whitespace-pre-wrap">
                                            {msg.text}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex justify-start">
                                <div className="rounded-2xl border border-[#F7BD53]/25 bg-[#F7BD53]/10 px-5 py-4">
                                    <div className="flex gap-1">
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#F7BD53]"></span>
                                        <span
                                            className="h-2 w-2 animate-bounce rounded-full bg-[#F7BD53]"
                                            style={{ animationDelay: "0.15s" }}
                                        ></span>
                                        <span
                                            className="h-2 w-2 animate-bounce rounded-full bg-[#F7BD53]"
                                            style={{ animationDelay: "0.3s" }}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Footer */}

                    <div className="border-t border-white/10 p-4">
                        {/* Suggested Questions */}

                        <div className="mb-4 flex flex-wrap gap-2">
                            {suggestedQuestions.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setMessage(item)}
                                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-xs
                    text-gray-300
                    transition-all
                    hover:border-[#F7BD53]
                    hover:bg-[#F7BD53]/10
                    hover:text-white
                  "
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Input */}

                        <div className="flex gap-3">
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                }}
                                placeholder="Ask me anything..."
                                className="
                  flex-1
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  placeholder:text-gray-500
                  focus:border-[#F7BD53]
                "
                            />

                            <button
                                onClick={sendMessage}
                                disabled={!message.trim() || loading}
                                className={`
                  rounded-xl
                  px-5
                  font-semibold
                  text-white
                  transition-all
                  ${!message.trim() || loading
                                        ? "cursor-not-allowed bg-gray-700 opacity-50"
                                        : "bg-gradient-to-r from-[#F7BD53] to-[#F7BD53] hover:scale-105"
                                    }
                `}
                            >
                                {loading ? "..." : "→"}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}