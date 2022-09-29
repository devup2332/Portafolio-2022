import { Button, useTheme } from "@mui/material";
const CustomButton = (props: any) => {
  const { color }: { color: "primary" | "secondary" | "success" } = props;
  const theme = useTheme();
  return (
    <Button {...props} style={{ backgroundColor: theme.palette[color]?.main }}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
