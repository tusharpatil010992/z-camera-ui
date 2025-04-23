import { Box, Button } from "@mui/material";
import React from "react";
import BasicTabs from "../CustomTabs";
import VideoSettings from "./VideoSettings";

const Settings = (props: any) => {
  const tabDetails = [
    {
      tabName: "Video Settings",
      moduleName: VideoSettings,
    },
    {
      tabName: "Color/Gamma",
      moduleName: VideoSettings,
    },
    {
      tabName: "Info/Control",
      moduleName: VideoSettings,
    },
  ];

  return (
    <Box p={2}>
      {props.pageState.selectedCamera && (
        <BasicTabs tabs={tabDetails} pageState={props.pageState} />
      )}

      {props.pageState.selectedCamera != "ALL" && (
        <Box p={2}>
          <Button variant="contained" size="medium" color="secondary">
            Load Current Settings
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Settings;
