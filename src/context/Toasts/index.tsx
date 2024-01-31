import { createContext, ReactNode, useContext, useState } from 'react';
import { IToastMessage } from '@/types/toast-message';

type ToastContextType = {
	messages: IToastMessage[];
	handleCloseToast: (id: string) => void;
	handleAddToast: (details: IToastMessage) => void;
};

export const ToastContext = createContext({} as ToastContextType);

type ToastProviderProps = {
	children: ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
	const [messages, setMessages] = useState<IToastMessage[]>([]);

	function handleCloseToast(id: string) {
		setMessages((prev) => prev.filter((message) => message.id !== id));
	}

	function handleAddToast(details: IToastMessage) {
		const successMessage: IToastMessage = {
			id: details.id,
			message: details.message,
			type: details.type,
			duration: details.duration,
		};
		setMessages((prevMessages) => [...prevMessages, successMessage]);
	}

	return (
		<ToastContext.Provider
			value={{
				messages,
				handleCloseToast,
				handleAddToast,
			}}
		>
			{children}
		</ToastContext.Provider>
	);
}
