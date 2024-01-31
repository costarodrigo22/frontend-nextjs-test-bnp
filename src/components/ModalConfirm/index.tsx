import React from 'react';
import { Modal } from '@/components/Modal';

type ModalConfirmProps = {
	isOpen: boolean;
	title: string;
	content: React.ReactNode;
	onClose: () => void;
};

export function ModalConfirm({
	isOpen,
	title,
	content,
	onClose,
}: ModalConfirmProps) {
	return (
		<Modal isOpen={isOpen} title={title} onClose={onClose}>
			{content}
		</Modal>
	);
}
