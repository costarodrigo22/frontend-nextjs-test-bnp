/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';

import styles from '@/styles/modal.module.css';
import { ModalConfirm } from '@/components/ModalConfirm';

export default function Home() {
	const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false);

	function handleModalClose() {
		setModalConfirmIsOpen(false);
	}

	return (
		<>
			<main className={styles.container}>
				<button type='button' onClick={() => setModalConfirmIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			{/* Renderizar modal de confirmação */}

			<ModalConfirm
				isOpen={modalConfirmIsOpen}
				onClose={handleModalClose}
				title='Confirmação'
				content={
					<div style={{ padding: 20 }}>
						<p>Este é o conteúdo dinâmico do modal de confirmação.</p>
					</div>
				}
			/>
		</>
	);
}
