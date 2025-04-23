import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Layout from "../Layout";
import { Paper, Box } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import AddCamera from "./AddCamera";
import { Title } from "../Title";
import BasicTabs from "../CustomTabs";
import CameraParams from "./CameraParams";

const Home = () => {
  const [pageState, setPageState] = useState<any>({
    loading: true,
    domains: [],
    selectedCamera: false,
  });

  const initialState = {
    camera1: "",
    camera2: "",
    camera3: "",
    camera4: "",
    camera5: "",
    camera6: "",
  };

  const [cameras, setCameras] = useState<any>(initialState);
  const [cameraConnected, setCameraConnected] = useState<any>(initialState);
  const [cameraStatus, setcameraStatus] = useState<any>(initialState);

  useEffect(() => {
    setPageState((prev: any) => {
      return {
        ...prev,
        loading: false,
      };
    });
  }, []);

  const tabDetails = [
    {
      tabName: "Camera IP Setting",
      moduleName: AddCamera,
    },
    {
      tabName: "Camera Parameters",
      moduleName: CameraParams,
    },
  ];

  return (
    <Layout>
      <Grid size={12}>
        <Paper elevation={3}>
          <AppBar color="primary" position="static">
            <Title title="Z-CAMERA" />
          </AppBar>
          {pageState.loading ? (
            <></>
          ) : (
            <Box p={2}>
              <BasicTabs
                tabs={tabDetails}
                pageState={pageState}
                setPageState={setPageState}
                cameras={cameras}
                setCameras={setCameras}
                cameraConnected={cameraConnected}
                setCameraConnected={setCameraConnected}
                cameraStatus={cameraStatus}
                setcameraStatus={setcameraStatus}
              />
            </Box>
          )}
        </Paper>
      </Grid>
    </Layout>
  );
};

export default Home;
