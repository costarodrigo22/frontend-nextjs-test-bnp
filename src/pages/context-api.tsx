/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { ToastMessage } from '@/components/ToastMessage';
import { useToastContext } from '@/hooks/useToastContext';

export default function ContextApi() {
	const { messages, handleAddToast } = useToastContext();

	function handleSuccessButtonClick() {
		handleAddToast({
			id: new Date().getTime().toString(),
			message: 'Toast de sucesso',
			type: 'success',
			duration: 2000,
		});
	}

	function handleErrorButtonClick() {
		handleAddToast({
			id: new Date().getTime().toString(),
			message: 'Toast de error',
			type: 'error',
			duration: 2000,
		});
	}

	return (
		<>
			<div className={styles.container}>
				<button type='button' onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type='button' onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			<div className={styles['toast-container']}>
				{messages.map((message) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div>
		</>
	);
}
