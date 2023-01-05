import { Button } from "@mui/material";
const CustomButton = (props:any) => {
  return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
