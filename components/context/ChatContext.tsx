"use client";

import {
    createContext,
    useCallback,
    useContext,
    useState,
    ReactNode,
} from "react";

interface ChatContextType {
    open: boolean;
    openChat: () => void;
    closeChat: () => void;
    toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [open, setOpen] = useState(false);

    const openChat = useCallback(() => setOpen(true), []);
    const closeChat = useCallback(() => setOpen(false), []);
    const toggleChat = useCallback(() => setOpen((prev) => !prev), []);

    return (
        <ChatContext.Provider
            value={{
                open,
                openChat,
                closeChat,
                toggleChat,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);

    if (!context) {
        throw new Error("useChat must be used inside ChatProvider");
    }

    return context;
}