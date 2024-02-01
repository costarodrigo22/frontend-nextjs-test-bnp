import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IToastMessage } from "@/types/toast-message";

type ToastContextType = {
  messages: IToastMessage[];
  setMessages: Dispatch<SetStateAction<IToastMessage[]>>;
};

export const ToastContext = createContext({} as ToastContextType);

type ToastProviderProps = {
  children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  return (
    <ToastContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
