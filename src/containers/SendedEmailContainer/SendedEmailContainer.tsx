import { Button } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SendedEmailVector from "../../components/atoms/vectors/SendedEmailVector";

const SendedEmailContainer = () => {
	const { t } = useTranslation("index");
	return (
		<div className="flex text-white items-center h-screen justify-center">
			<div className="flex justify-self-center justify-center lg:justify-between w-10/12 lg:items-center lg:max-w-8xl">
				<div className="grid gap-6 border-2 border-red-400 h-fit xl:gap-10">
					<h1 className="text-center text-2xl font-extrabold lg:text-left xl:text-4xl 2xl:text-6xl">
						{t("sendedMessage.title")}{" "}
					</h1>
					<SendedEmailVector className="w-full h-full lg:hidden" />
					<p className="text-center leading-6 font-bold lg:text-left lg:font-normal">
						{t("sendedMessage.description")}
					</p>
					<Link href="/">
						<Button
							color="secondary"
							variant="contained"
							className="w-full h-fit lg:w-40 xl:h-12">
							{t("sendedMessage.button")}
						</Button>
					</Link>
				</div>
				<SendedEmailVector className="w-6/12 h-full hidden lg:block" />
			</div>
		</div>
	);
};

export default SendedEmailContainer;
