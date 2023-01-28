import { FieldValues } from "react-hook-form";

export interface CredentialsLogin extends FieldValues {
	email: string;
	password: string;
}
