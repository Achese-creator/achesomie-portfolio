"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
        "Tell me about CoastCast",
        "Best AI Project",
        "Technical Skills",
        "Education",
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
            const res = await fetch("http://127.0.0.1:8000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question: userMessage.text,
                }),
            });

            const data = await res.json();

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
            bg-[#0B0F19]/95
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
                                        ? "rounded-tl-md border border-blue-500/20 bg-blue-500/10"
                                        : "rounded-tr-md bg-gradient-to-r from-blue-600 to-purple-600"
                                        }`}
                                >
                                    <p className="mb-2 text-xs font-semibold opacity-70">
                                        {msg.role === "assistant"
                                            ? "AI Assistant"
                                            : "You"}
                                    </p>

                                    <p className="text-sm leading-7 text-white">
                                        {msg.text}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex justify-start">
                                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-4">
                                    <div className="flex gap-1">
                                        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></span>
                                        <span
                                            className="h-2 w-2 animate-bounce rounded-full bg-blue-400"
                                            style={{ animationDelay: "0.15s" }}
                                        ></span>
                                        <span
                                            className="h-2 w-2 animate-bounce rounded-full bg-blue-400"
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
                    hover:border-blue-500
                    hover:bg-blue-500/10
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
                  focus:border-blue-500
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
                                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
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