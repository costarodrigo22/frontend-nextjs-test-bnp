/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { useForm } from 'react-hook-form';

import styles from '@/styles/formulario.module.css';
import { useState } from 'react';
import { useToastContext } from '@/hooks/useToastContext';
import { faker } from '@faker-js/faker';

type Inputs = {
	name: string;
	email: string;
};

export default function Form() {
	const [loading, setLoading] = useState(false);

	const { handleAddToast } = useToastContext();

	const {
		register,
		reset,
		handleSubmit: hookFormHandleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const handleSubmit = hookFormHandleSubmit(async (fields) => {
		setLoading(true);

		try {
			const response = await fetch('/api/users/create', {
				method: 'POST',
				body: JSON.stringify(fields),
			});

			await response.json();

			reset({ name: '', email: '' });

			handleAddToast({
				id: faker.string.uuid(),
				message: 'Usuário criado com sucesso!',
				type: 'success',
				duration: 3000,
			});
		} catch {
			handleAddToast({
				id: faker.string.uuid(),
				message: 'Algo deu errado ao criar usuário!',
				type: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
		console.log('submit', fields);
	});

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Name'
						{...register('name', { required: true })}
					/>
					{errors.name && (
						<span style={{ color: '#d44851', fontSize: 12 }}>
							Nome é obrigatório
						</span>
					)}

					<input
						type='email'
						placeholder='E-mail'
						{...register('email', { required: true })}
					/>
					{errors.email && (
						<span style={{ color: '#d44851', fontSize: 12 }}>
							E-mail é obrigatório
						</span>
					)}

					<button type='submit' data-type='confirm'>
						{loading ? 'Aguarde, enviando...' : 'Enviar'}
					</button>
				</form>
			</div>
		</div>
	);
}
