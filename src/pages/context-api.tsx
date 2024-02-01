/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { useToastContext } from '@/hooks/useToastContext';
import { faker } from '@faker-js/faker';

export default function ContextApi() {
	const { handleAddToast } = useToastContext();

	function handleSuccessButtonClick() {
		handleAddToast({
			id: faker.string.uuid(),
			message: 'Toast de sucesso',
			type: 'success',
			duration: 2000,
		});
	}

	function handleErrorButtonClick() {
		handleAddToast({
			id: faker.string.uuid(),
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
		</>
	);
}
