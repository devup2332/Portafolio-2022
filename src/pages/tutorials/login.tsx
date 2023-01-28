import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Button,
	CircularProgress,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import LoginImage from "../../assets/login.jpg";
import { IconGithub, IconGoogle } from "../../components/atoms/icons";
import { fetchLoginUser } from "../../lib/api/auth/login";
import { emailRex } from "../../lib/utils/EmailRex";
import { CredentialsLogin } from "../../models/login/credentials";

type CustomControl = {
	name: string;
	validations: {
		[key: string]: string | boolean | RegExp;
	};
	label: string;
	className: string;
};

const controls: CustomControl[] = [
	{
		name: "email",
		label: "Email",
		validations: {
			required: true,
			pattern: emailRex,
		},
		className: "w-full bg-white",
	},
	{
		name: "password",
		label: "Password",
		validations: {
			required: true,
		},
		className: "w-full bg-white",
	},
];

const LoginPage = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);
	const [showPass, setShowPass] = useState(false);
	const router = useRouter();
	const { t } = useTranslation("index");

	const loginUser: SubmitHandler<FieldValues> = async (data) => {
		setLoading(true);
		const { status, message, token } = await fetchLoginUser(
			data as CredentialsLogin
		);
		console.log({ status, message });
		if (!status) {
			return setLoading(false);
		}
		localStorage.setItem("CODE_UP_TOKEN", token);
		setLoading(false);
		router.replace("/tutorials/profile");
	};
	return (
		<div>
			<Head>
				<title>Login | CodeUp</title>
			</Head>
			<div className='relative h-screen bg-black-opacity z-50 shadow-opacity'>
				<img
					src={LoginImage.src}
					className='w-full h-full object-cover'
					alt=''
				/>
				<form
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 grid gap-5 z-10 bg-white px-5 py-10 rounded-xl max-w-lg 2xl:max-w-md lg:px-10 lg:py-16'
					onSubmit={handleSubmit(loginUser, (err) => console.log({ err }))}>
					<Typography className='text-center text-3xl'>Sign In</Typography>
					{controls.map(({ name, validations }, index) => {
						return (
							<Controller
								key={index}
								name={name}
								rules={validations}
								control={control}
								render={({ field }) => {
									return (
										<FormControl
											error={errors[name] ? true : false}
											{...field}
											variant='outlined'>
											<InputLabel>
												{t(`tutorials.login.form.fields.${name}`)}
											</InputLabel>
											<OutlinedInput
												endAdornment={
													name === "password" && (
														<InputAdornment position='end'>
															<IconButton
																onClick={() => setShowPass(!showPass)}>
																{showPass ? <Visibility /> : <VisibilityOff />}
															</IconButton>
														</InputAdornment>
													)
												}
												label={t(`tutorials.login.form.fields.${name}`)}
												type={
													name === "email"
														? "text"
														: showPass
														? "text"
														: "password"
												}
											/>
											{errors[name] && (
												<FormHelperText>
													{t(
														`tutorials.login.form.errors.${name}.${errors[name]?.type}`
													)}
												</FormHelperText>
											)}
										</FormControl>
									);
								}}
							/>
						);
					})}
					<Link href='/forgot-pass'>
						<a className='no-underline text-black  lg:w-fit'>
							<Typography
								className='font-semibold text-center lg:text-left'
								fontFamily='Montserrat'>
								{t("tutorials.login.forgotPassText")}
							</Typography>
						</a>
					</Link>
					<Button
						className='bg-secondPrimary text-white py-3 flex gap-5 items-center'
						type='submit'>
						{loading && (
							<CircularProgress size='25px' className='block text-white' />
						)}
						{t("tutorials.login.form.fields.button")}
					</Button>
					<Typography
						className='text-center lg:text-left'
						fontFamily='Montserrat'>
						{t("tutorials.login.registerText.text")}
						<Link href='/forgot-pass'>
							<a className='no-underline text-black font-semibold'>
								{t("tutorials.login.registerText.link")}
							</a>
						</Link>
					</Typography>
					<div className='flex justify-center gap-5'>
						<IconButton>
							<IconGoogle />
						</IconButton>
						<IconButton>
							<IconGithub className='fill-current text-black' />
						</IconButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
