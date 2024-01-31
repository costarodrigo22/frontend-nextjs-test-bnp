import { ToastContext } from '@/context/Toasts';
import { useContext } from 'react';

export function useToastContext() {
	const context = useContext(ToastContext);

	return context;
}
