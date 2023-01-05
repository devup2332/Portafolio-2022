import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { API_HOST } = publicRuntimeConfig;

export const environments = {
	API: {
		HOST: API_HOST,
	},
};
