import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Layout from "../Layout";
import { Paper } from "@mui/material";
import Settings from "./Settings";

import AppBar from "@mui/material/AppBar";
import Application from "./Applicaton";
import { Title } from "../Title";

const Home = () => {
  const [pageState, setPageState] = useState<any>({
    loading: true,
    domains: [],
    selectedCamera: "",
  });

  useEffect(() => {
    console.log("setting page loading");
    setPageState((prev: any) => {
      return {
        ...prev,
        loading: false,
      };
    });
  }, []);

  return pageState.loading ? (
    <div>Loading.....</div>
  ) : (
    <Layout>
      <Grid size={12}>
        <Paper elevation={3}>
          <AppBar color="primary" position="static">
            <Title title="Z-CAMERA" />
          </AppBar>
          <Application pageState={pageState} setPageState={setPageState} />
          {Array.isArray(pageState.domains) && pageState.domains.length > 0 && (
            <Settings pageState={pageState} />
          )}
        </Paper>
      </Grid>
    </Layout>
  );
};

export default Home;
