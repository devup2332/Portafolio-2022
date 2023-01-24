import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Button,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LoginImage from "../../assets/login.jpg";
import { emailRex } from "../../lib/utils/EmailRex";

type CustomControl = {
	name: string;
	validations: {
		[key: string]: string | boolean | RegExp;
	};
	className: string;
};

const controls: CustomControl[] = [
	{
		name: "email",
		validations: {
			required: true,
			pattern: emailRex,
		},
		className: "w-full bg-white",
	},
	{
		name: "password",
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
	const [showPass, setShowPass] = useState(false);
	const { t } = useTranslation("index");

	const loginUser = (data: any) => {
		console.log({ data });
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
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 grid gap-5 z-10 bg-white px-5 py-10 rounded-md max-w-lg 2xl:max-w-md lg:px-10 lg:py-16'
					onSubmit={handleSubmit(loginUser)}>
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
											variant='filled'>
											<InputLabel>
												{t(`tutorials.login.form.${name}`)}
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
												type={
													name === "email"
														? "text"
														: showPass
														? "text"
														: "password"
												}
											/>
											{errors[name] && (
												<FormHelperText>Error en este campo</FormHelperText>
											)}
										</FormControl>
									);
								}}
							/>
						);
					})}
					<Button className='bg-secondPrimary text-white py-3' type='submit'>
						Sign In
					</Button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
