import { environments } from "../../../environments";

export const fetchLoginUser = async (credentials: {
	email: string;
	password: string;
}) => {
	const url = `${environments.API.HOST}/dev/signin`;
	const res = await fetch(url, {
		body: JSON.stringify(credentials),
		method: "POST",
	});

	return await res.json();
};
