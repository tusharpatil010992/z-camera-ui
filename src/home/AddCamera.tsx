import React, { useState } from "react";
import { Badge, Box, Grid, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import VideocamIcon from "@mui/icons-material/Videocam";
import { apiCall, getEndpoint } from "../utils";
import axios from "axios";

const ipRegex =
  /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

const AddCamera = (props: any) => {
  const {
    cameras,
    setCameras,
    cameraConnected,
    setCameraConnected,
    cameraStatus,
    setcameraStatus,
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    mode: "onBlur",
    defaultValues: {
      camera1: "10.1.0.1",
      camera2: "10.1.0.2",
      camera3: "10.1.0.3",
      camera4: "10.1.0.4",
      camera5: "10.1.0.5",
      camera6: "10.1.0.6",
    },
  });

  const onSubmit = (data: any) => {
    // axios
    //   .all([
    //     axios.get(getEndpoint(data.camera1, "session")),
    //     axios.get(getEndpoint(data.camera2, "session")),
    //     axios.get(getEndpoint(data.camera3, "session")),
    //     axios.get(getEndpoint(data.camera4, "session")),
    //     axios.get(getEndpoint(data.camera5, "session")),
    //     axios.get(getEndpoint(data.camera6, "session")),
    //   ])
    //   .then(
    //     axios.spread((cam1, cam2, cam3, cam4, cam5, cam6) => {
    //       setCameraConnected({
    //         camera1: cam1.data?.code == 0 ? "connected" : "",
    //         camera2: cam2.data?.code == 0 ? "connected" : "",
    //         camera3: cam3.data?.code == 0 ? "connected" : "",
    //         camera4: cam4.data?.code == 0 ? "connected" : "",
    //         camera5: cam5.data?.code == 0 ? "connected" : "",
    //         camera6: cam6.data?.code == 0 ? "connected" : "",
    //       });
    //     })
    //   )
    //   .catch((error) => {
    //     console.log(error);
    //     return false;
    //   });

    //temp
    setCameraConnected({
      camera1: "connected",
      camera2: "connected",
      camera3: "connected",
      camera4: "connected",
      camera5: "connected",
      camera6: "connected",
    });

    setCameras(data);
  };
  return (
    <Box p={5}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container gap={2}>
          {cameras &&
            Array.isArray(Object.keys(cameras)) &&
            Object.keys(cameras).length > 0 &&
            Object.keys(cameras).map((cameraName: any) => {
              const errorMsg: any = errors?.[cameraName]?.message || "";
              return (
                <React.Fragment key={`${cameraName}`}>
                  <Grid size={4}>
                    <TextField
                      id="outlined-basic"
                      label={cameraName}
                      variant="outlined"
                      fullWidth
                      {...register(cameraName, {
                        required: "This field is requried",
                        pattern: {
                          value: ipRegex,
                          message: "Enter valid IP address",
                        },
                      })}
                      error={errorMsg ? true : false}
                      helperText={errorMsg}
                    />
                  </Grid>
                  <Grid size={4}>
                    <Badge
                      color={
                        cameraConnected?.[cameraName] === ""
                          ? "error"
                          : "success"
                      }
                      badgeContent=""
                    >
                      <VideocamIcon fontSize="large" />
                    </Badge>
                  </Grid>
                </React.Fragment>
              );
            })}
        </Grid>
        <Box
          sx={{
            margin: "10px 0px",
          }}
        >
          <Button type="submit" variant="outlined" size="medium">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddCamera;
