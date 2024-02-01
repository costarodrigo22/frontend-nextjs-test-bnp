import { useToastContext } from '@/hooks/useToastContext';
import styles from '@/styles/context-api.module.css';
import { ToastMessage } from '../ToastMessage';

export function ToastContainer() {
	const { messages } = useToastContext();

	return (
		<div className={styles['toast-container']}>
			{messages?.map((message) => (
				<ToastMessage key={message.id} content={message} />
			))}
		</div>
	);
}
