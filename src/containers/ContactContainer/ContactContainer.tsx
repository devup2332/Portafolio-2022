import {
	Button,
	CircularProgress,
	FormControl,
	FormHelperText,
	MenuItem,
	styled,
	TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContactVector from "../../components/atoms/vectors/ContactVector";
import { environments } from "../../environments";
import countries from "../../lib/utils/Countries";
import { emailRex } from "../../lib/utils/EmailRex";
import { phonePattern } from "../../lib/utils/PhonePattern";

const controls = [
	{
		name: "email",
		type: "text",
		validations: {
			required: true,
			pattern: emailRex,
		},
		className: "2xl:col-start-1 2xl:col-end-5",
	},
	{
		name: "fullName",
		type: "text",
		validations: {
			required: true,
		},
		className: "2xl:col-start-5 2xl:col-end-9",
	},
	{
		name: "code",
		type: "text",
		validations: {
			pattern: phonePattern,
			required: true,
		},
		className: "2xl:col-start-1 2xl:col-end-3",
	},
	{
		name: "phone",
		type: "number",
		validations: {
			pattern: phonePattern,
			required: true,
		},
		className: "2xl:col-start-3 2xl:col-end-9",
	},
	{
		name: "message",
		type: "text",
		validations: {
			required: true,
		},
		className: "2xl:col-start-1 2xl:col-end-9",
	},
];

const CustomInputCss = styled(TextField)({
	"& label.Mui-focused": {
		color: "red",
	},
	"& div input": {
		color: "white",
	},
	"& label": {
		color: "white",
	},
	"& div textarea": {
		color: "white",
	},
	"& .MuiInputBase-root .MuiSelect-select": {
		color: "white",
	},
	"& .MuiInputBase-root .MuiSvgIcon-root": {
		color: "white",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "white",
		},
		"&:hover fieldset": {
			borderColor: "white",
		},
		"&.Mui-focused fieldset": {
			borderColor: "red",
		},
	},
});

const ContactContainer = () => {
	const { t } = useTranslation("index");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit(
		async (data) => {
			data.phone = data.code + data.phone;
			setLoading(true);
			const res = await fetch(`${environments.API.HOST}/dev/sendEmail`, {
				method: "POST",
				body: JSON.stringify(data),
			});
			await res.json();
			router.push("/sendedEmail");
			setLoading(false);
		},
		(err) => {
			setLoading(true);
			console.log({ err });
			setLoading(false);
		}
	);

	return (
		<div className='text-white max-w-md py-20 h-screen w-10/12 m-auto lg:py-32 lg:max-w-8xl 3xl:py-48'>
			<div className='grid gap-10 lg:gap-20'>
				<h1 className='text-center lg:text-left lg:text-5xl 2xl:text-6xl 3xl:text-8xl'>
					{t("contact.title")}
				</h1>
				<div className='lg:flex lg:gap-20 2xl:gap-32'>
					<form
						className='grid gap-4 lg:w-6/12 lg:gap-10 2xl:grid-cols-8'
						onSubmit={onSubmit}>
						{controls.map(({ type, name, validations, className }, index) => {
							return (
								<Controller
									key={index}
									name={name}
									rules={validations}
									control={control}

									render={({ field }) => {
										return (
											<FormControl {...field} className={className}>
												<CustomInputCss
													multiline={name === "message"}
													select={name === "code"}
													className={className}
													rows={name === "message" ? 6 : 1}
													type={type}
													onChange={(e) => {
														if (name === "code")
															setValue("code", e.target.value);
													}}
													label={t(`contact.form.fields.${name}`)}>
													{name === "code" &&
														countries.map(({ label, value }, index) => {
															return (
																<MenuItem key={index} value={value}>
																	{label}
																</MenuItem>
															);
														})}
												</CustomInputCss>
												<FormHelperText error={true}>
													{errors[name] &&
														errors[name]?.type === "required" &&
														t(`contact.form.errors.${name}.required`)}
													{errors[name]?.type === "pattern"
														? t(`contact.form.errors.${name}.pattern`)
														: null}
												</FormHelperText>
											</FormControl>
										);
									}}
								/>
							);
						})}
						<Button
							variant='contained'
							color='secondary'
							className='py-2 2xl:col-start-1 2xl:col-end-9 flex gap-3'
							type='submit'>
							{loading && <CircularProgress color='inherit' size={30} />}
							{t("contact.form.button")}
						</Button>
					</form>
					<div className='hidden w-full lg:block lg:w-6/12'>
						<ContactVector className='w-full h-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactContainer;
