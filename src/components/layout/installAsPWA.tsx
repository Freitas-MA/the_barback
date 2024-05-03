"use client";
import { useState, useEffect, type ReactNode } from "react";
import { MdAppShortcut } from "react-icons/md";

interface BeforeInstallPromptEvent extends Event {
	prompt(): void;
	userChoice: Promise<{ outcome: string }>;
}

interface InstallButtonProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	pathHref?: string;
	children?: ReactNode;
	disabled?: boolean;
}

const InstallButton = ({ className }: InstallButtonProps) => {
	const [deferredPrompt, setDeferredPrompt] =
		useState<BeforeInstallPromptEvent | null>(null);
	const [isAppInstalled, setIsAppInstalled] = useState<boolean>(false);

	const ClassName = className || "";

	useEffect(() => {
		// Verificar se a aplicação já está instalada
		window.addEventListener("appinstalled", () => {
			setIsAppInstalled(true);
		});

		const handleBeforeInstallPrompt = (event: Event) => {
			event.preventDefault();
			setDeferredPrompt(event as BeforeInstallPromptEvent); // Cast to BeforeInstallPromptEvent
		};

		window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

		return () => {
			window.removeEventListener(
				"beforeinstallprompt",
				handleBeforeInstallPrompt,
			);
		};
	}, []);

	const installPWA = () => {
		if (deferredPrompt) {
			deferredPrompt.prompt();

			deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
				if (choiceResult.outcome === "accepted") {
					console.log("User accepted the A2HS prompt");
				} else {
					console.log("User dismissed the A2HS prompt");
				}

				setDeferredPrompt(null);
			});
		}
	};

	if (isAppInstalled) return null;

	return (
		<div
			className={`${className} text-center rounded-md border border-black p-2 bg bg-lime-200 hover:bg-lime-400`}
		>
			<button type="button" onClick={installPWA}>
				<p className="hidden md:inline-block">Install as a APP</p>
				<MdAppShortcut className="inline-block md:ml-2" />
			</button>
		</div>
	);
};

export default InstallButton;
