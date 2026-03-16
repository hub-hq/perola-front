import { Boxed, Spacing } from "@/components";

type SocialLink = {
	name: string;
	href: string;
	iconUrl: string;
};

const socialLinks: SocialLink[] = [
	{
		name: "Instagram",
		href: "https://www.instagram.com/perolathaisampaio",
		iconUrl: "/icons/social/instagram.svg",
	},
	{
		name: "Facebook",
		href: "https://www.facebook.com",
		iconUrl: "/icons/social/facebook.svg",
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com",
		iconUrl: "/icons/social/youtube.svg",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com",
		iconUrl: "/icons/social/linkedin.svg",
	},
	{
		name: "WhatsApp",
		href: "https://www.whatsapp.com",
		iconUrl: "/icons/social/whatsapp.svg",
	},
	{
		name: "Threads",
		href: "https://www.threads.com/@perolathaisampaio",
		iconUrl: "/icons/social/threads.svg",
	},
	{
		name: "X",
		href: "https://x.com",
		iconUrl: "/icons/social/x.svg",
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			style={{
				width: "100%",
				borderTop: "1px solid var(--color-border-subtle)",
				background: "var(--color-bg-surface-soft)",
			}}
		>
			<Boxed maxWidth="xl" padding="lg" gap="sm" align="center">
				<strong style={{ textAlign: "center", fontSize: "1.05rem" }}>
					Instituição Pérola
				</strong>
				<p>
					Informação pública com transparência, participação e compromisso com a
					comunidade.
				</p>

				<Spacing size="sm" />

				<nav aria-label="Redes sociais">
					<ul
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							gap: "10px",
							padding: 0,
							margin: 0,
							listStyle: "none",
						}}
					>
						{socialLinks.map((social) => (
							<li key={social.name}>
								<a
									href={social.href}
									target="_blank"
									rel="noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
										gap: "8px",
										minHeight: "40px",
										padding: "0 14px",
										borderRadius: "9999px",
										border: "1px solid var(--color-border-soft)",
										background: "var(--color-bg-surface)",
										fontWeight: 600,
										textDecoration: "none",
									}}
								>
									<img
										src={social.iconUrl}
										alt={social.name}
										width={18}
										height={18}
										onError={(event) => {
											event.currentTarget.style.display = "none";
										}}
										style={{ display: "block" }}
									/>
									<span>{social.name}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>

				<Spacing size="sm" />

				<p style={{ textAlign: "center" }}>
					Contato: <a href="mailto:contato@instituicaoperola.org.br">contato@instituicaoperola.org.br</a> e <a href="mailto:contato@perola.social.br">contato@perola.social.br</a>
				</p>
				<small style={{ textAlign: "center" }}>
					© {currentYear} Instituição Pérola. Todos os direitos reservados.
				</small>
			</Boxed>
		</footer>
	);
}

