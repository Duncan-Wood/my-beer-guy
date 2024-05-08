import { useEffect } from "react";
import { useRouter } from 'next/navigation'


function useEscapeKey(isModalOpen, onEscape) {
  const router = useRouter();

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };
    // Add the event listener to the document
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      // Clean up the event listener when the component unmounts or the condition changes
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, onEscape]);
}

export default useEscapeKey;
