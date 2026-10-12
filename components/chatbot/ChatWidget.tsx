"use client";

import { useEffect, useRef, useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import WelcomeBubble from "./WelcomeBubble";
import PromptBubble from "./PromptBubble";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        chatRef.current &&
        !chatRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    setShowWelcome(false);
  };

  return (
    <div ref={chatRef}>
      {!open && !showWelcome && <PromptBubble />}

      <WelcomeBubble
        show={showWelcome}
        onOpen={handleOpen}
      />

      <ChatButton
        isOpen={open}
        onClick={() => {
          setOpen(!open);
          setShowWelcome(false);
        }}
      />

      <ChatWindow open={open} />
    </div>
  );
}