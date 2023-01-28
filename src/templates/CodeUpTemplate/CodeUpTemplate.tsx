import Head from "next/head";
import { useEffect, useState } from "react";
import CodeUpLoader from "../../components/atoms/CodeUpLoader/CodeUpLoader";
import CodeUpHeader from "../../components/organisms/CodeUpHeader/CodeUpHeader";
import CodeUpSidebar from "../../components/organisms/CodeUpSidebar/CodeUpSidebar";

interface CodeUpTemplateProps {
	children: JSX.Element;
	title: string;
}

const CodeUpTemplate = ({ children, title }: CodeUpTemplateProps) => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<div className='bg-primary'>
			<Head>
				<title>CodeUp | {title}</title>
			</Head>
			{loading ? (
				<CodeUpLoader />
			) : (
				<>
					<div>
						{title !== "Login" && title !== "Register" && <CodeUpHeader />}
						{children}
					</div>
					<CodeUpSidebar />
				</>
			)}
		</div>
	);
};

export default CodeUpTemplate;
