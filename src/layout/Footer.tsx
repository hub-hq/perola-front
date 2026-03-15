import Boxed from "@/components/Boxed/Boxed";
import Spacing from "@/components/Spacing/Spacing";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<Boxed maxWidth="xl" padding="lg" gap="sm">
				<strong>Instituição Pérola</strong>
				<p>
					Informação pública com transparência, participação e compromisso com a
					comunidade.
				</p>

				<Spacing size="sm" />

				<nav aria-label="Redes sociais">
					<ul>
						<li>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com"
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com"
								target="_blank"
								rel="noreferrer"
							>
								YouTube
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://www.whatsapp.com"
								target="_blank"
								rel="noreferrer"
							>
								WhatsApp
							</a>
						</li>
					</ul>
				</nav>

				<Spacing size="sm" />

				<p>
					Contato: <a href="mailto:contato@instituicaoperola.org.br">contato@instituicaoperola.org.br</a>
				</p>
				<small>© {currentYear} Instituição Pérola. Todos os direitos reservados.</small>
			</Boxed>
		</footer>
	);
}

