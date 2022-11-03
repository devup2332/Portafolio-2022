import Menu from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { setTutorialsSidebarAction } from "../../../store/actions/AppComponentsActions/setTutorialsSidebarAction";
import { useAppDispatch } from "../../../store/store";

const TutorialsHeader = () => {
  const dispatch = useAppDispatch();
  const openSidebar = () => {
    dispatch(setTutorialsSidebarAction(true));
  };
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar className="flex justify-between">
        <Typography variant="h5" className="font-bold">
          Tutorials
        </Typography>
        <IconButton onClick={openSidebar}>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TutorialsHeader;
