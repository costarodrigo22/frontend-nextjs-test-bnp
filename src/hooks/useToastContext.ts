import { ToastContext } from "@/context/Toasts";
import { IToastMessage } from "@/types/toast-message";
import { useContext } from "react";

export function useToastContext() {
  const context = useContext(ToastContext);

  function handleCloseToast(id: string) {
    context.setMessages((prev) => prev.filter((message) => message.id !== id));
  }

  function handleAddToast(details: IToastMessage) {
    const successMessage: IToastMessage = {
      id: details.id,
      message: details.message,
      type: details.type,
      duration: details.duration,
    };
    context.setMessages((prevMessages) => [...prevMessages, successMessage]);
  }

  return { messages: context.messages, handleCloseToast, handleAddToast };
}
