"use client";

import {
    createContext,
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

    return (
        <ChatContext.Provider
            value={{
                open,
                openChat: () => setOpen(true),
                closeChat: () => setOpen(false),
                toggleChat: () => setOpen((prev) => !prev),
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