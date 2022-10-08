import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContactVector from "../../components/atoms/vectors/ContactVector";
import { environments } from "../../environments";
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
    className: "2xl:col-start-1 2xl:col-end-2",
  },
  {
    name: "fullName",
    type: "text",
    validations: {
      required: true,
    },
    className: "2xl:col-start-2 2xl:col-end-3",
  },
  {
    name: "phone",
    type: "text",
    validations: {
      pattern: phonePattern,
      required: true,
    },
    className: "2xl:col-start-1 2xl:col-end-3",
  },
  {
    name: "message",
    type: "text",
    validations: {
      required: true,
    },
    className: "2xl:col-start-1 2xl:col-end-3",
  },
];

const ContactContainer = () => {
  const { t } = useTranslation("index");
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(
    async (data) => {
      setLoading(true);
      const res = await fetch(`${environments.API.HOST}/dev/sendEmail`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const response = await res.json();
      router.push('/sendedEmail')
      setLoading(false);
    },
    (err) => {
      setLoading(true);
      console.log({ err });
      setLoading(false);
    }
  );
  return (
    <div className="text-white max-w-md py-20 h-screen w-10/12 m-auto lg:py-32 lg:max-w-8xl 3xl:py-48">
      <div className="grid gap-10 lg:gap-20">
        <h1 className="text-center lg:text-left lg:text-5xl 2xl:text-6xl 3xl:text-8xl">
          {t("contact.title")}
        </h1>
        <div className="lg:flex lg:gap-20 2xl:gap-32">
          <form
            className="grid gap-4 lg:w-6/12 lg:gap-10 2xl:grid-cols-2"
            onSubmit={onSubmit}
          >
            {controls.map(({ type, name, validations, className }, index) => {
              return (
                <Controller
                  key={index}
                  name={name}
                  rules={validations}
                  control={control}
                  render={({ field }) => {
                    return (
                      <FormControl
                        variant="outlined"
                        {...field}
                        className={className}
                      >
                        <InputLabel color="secondary">
                          {t(`contact.form.fields.${name}`)}
                        </InputLabel>
                        <OutlinedInput
                          multiline={true}
                          rows={name === "message" ? 6 : 1}
                          type={type}
                          label={t(`contact.form.fields.${name}`)}
                          color="secondary"
                        />
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
              variant="contained"
              color="secondary"
              className="py-2 2xl:col-start-1 2xl:col-end-3 flex gap-3"
              type="submit"
            >
              {loading && <CircularProgress color="inherit" size={30} />}
              {t("contact.form.button")}
            </Button>
          </form>
          <div className="hidden w-full lg:block lg:w-6/12">
            <ContactVector className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
