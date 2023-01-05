import { Drawer, Typography } from "@mui/material";
import { setTutorialsSidebarAction } from "../../../store/actions/AppComponentsActions/setTutorialsSidebarAction";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const TutorialsSidebar = () => {
  const dispatch = useAppDispatch();
  const { openTutorialsSidebar } = useAppSelector(
    (state) => state.appComponents
  );

  return (
    <Drawer
      open={openTutorialsSidebar}
      onClose={() => dispatch(setTutorialsSidebarAction(false))}
    >
      <Typography variant="h5" className="font-bold">
        Tutorials
      </Typography>
    </Drawer>
  );
};

export default TutorialsSidebar;
