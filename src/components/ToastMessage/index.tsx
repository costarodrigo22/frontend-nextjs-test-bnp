import { IToastMessage } from '@/types/toast-message.d';

import styles from './style.module.css';
import { useToastContext } from '@/hooks/useToastContext';
import { useEffect } from 'react';

type ToastMessageProps = {
	content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({
	content: data,
}) => {
	const { handleCloseToast } = useToastContext();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			handleCloseToast(data.id);
		}, data.duration);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<div
			className={styles.container}
			data-toast-type={data.type}
			data-toast-id={data.id}
		>
			<span data-content>{data.message}</span>

			<span data-close onClick={() => handleCloseToast(data.id)}>
				╳
			</span>
		</div>
	);
};
