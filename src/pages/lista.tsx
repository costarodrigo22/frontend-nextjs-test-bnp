/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { IUser } from '@/types/user';
import { useToastContext } from '@/hooks/useToastContext';
import { faker } from '@faker-js/faker';
import ContentLoader from 'react-content-loader';

export default function Lista() {
	const [users, setUsers] = useState<Array<IUser>>([]);
	const [loading, setLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const { handleAddToast } = useToastContext();

	function handleTryAgain() {
		getUsersList();
	}

	async function getUsersList() {
		try {
			const response = await fetch('/api/users');
			const data = await response.json();

			// throw new Error('Erro ao obter os dados');

			setHasError(false);
			setUsers(data);
		} catch {
			setHasError(true);

			handleAddToast({
				id: faker.string.uuid(),
				message: 'Opa! Algo deu errado ao listar os dados.',
				type: 'error',
				duration: 2000,
			});
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getUsersList();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de usuários</h2>

				{hasError && (
					<div data-eror>
						<span style={{ color: '#c04848' }}>
							Ocorreu um erro ao listar os usuários ;(
						</span>

						<button onClick={handleTryAgain}>Recarregar</button>
					</div>
				)}

				{loading && (
					<ContentLoader
						width={400}
						height={180}
						backgroundColor='#ababab'
						foregroundColor='#fafafa'
					>
						<rect x='0' y='15' rx='5' ry='5' width='300' height='15' />
						<rect x='0' y='35' rx='5' ry='5' width='250' height='15' />

						<rect x='0' y='65' rx='5' ry='5' width='300' height='15' />
						<rect x='0' y='85' rx='5' ry='5' width='250' height='15' />

						<rect x='0' y='115' rx='5' ry='5' width='300' height='15' />
						<rect x='0' y='135' rx='5' ry='5' width='250' height='15' />
					</ContentLoader>
				)}

				{!loading && !hasError && (
					<div data-list-container>
						{users.map((item) => (
							<div data-list-item key={item.id}>
								<span>
									<strong>Nome:</strong> {item.name}
								</span>
								<span>
									<strong>E-mail:</strong> {item.email}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
