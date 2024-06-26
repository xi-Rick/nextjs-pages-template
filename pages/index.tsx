import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import NextLink from "next/link";
import clientPromise from '../lib/mongodb';


type ServerProps = {
	isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<ServerProps> = async () => {
	try {
		await clientPromise;

		return {
			props: { isConnected: true },
		};
	} catch (error) {
		return {
			props: { isConnected: false },
		};
	}
};


export default function IndexPage({ isConnected }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Make&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
					<br />
					<h1 className={title()}>
						websites regardless of your design experience.
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						Beautiful, fast and modern React UI library.
					</h4>
				</div>

				<Image
					width={300}
					alt="NextUI hero Image"
					src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
				/>

				{isConnected ? (
					<h2 className="subtitle">You are connected to your MongoDB database</h2>
				) : (
					<h2 className="subtitle">
						You are NOT connected to your MongoDB database.
					</h2>
				)}

				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "shadow",
						})}
					>
						Documentation
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>
				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>
		</DefaultLayout>
	);
}
