import { useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { videoFormatOptions, frameRateOptions } from "../utils";

const VideoSettings = (props: any) => {
  const { pageState } = props;
  const [ddState, setDDState] = useState<any>({});
  const cameraName = pageState.selectedCamera.toString();
  const handleChange = (event: SelectChangeEvent) => {
    const ddName = event.target.name;
    setDDState((prev: any) => {
      return {
        ...prev,
        [cameraName]: {
          ...prev[cameraName],
          [ddName]: event.target.value as string,
        },
      };
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      items: [{ value: "" }],
    },
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    console.log("data ", data);
    //add code here
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Video Format</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ddState?.[cameraName]?.["videoFormat"] || ""}
              label="Video Format"
              onChange={handleChange}
              size="medium"
              name="videoFormat"
            >
              {videoFormatOptions.map((eachOption: string) => (
                <MenuItem value={eachOption}>{eachOption}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <Box p={2}>
            <Button variant="contained" size="medium">
              Set
            </Button>
          </Box>
        </Grid>

        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Frame Rate</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ddState?.[cameraName]?.["frameRate"] || ""}
              name="frameRate"
              label="Frame Rate"
              onChange={handleChange}
              size="medium"
            >
              {frameRateOptions.map((eachOption: string) => (
                <MenuItem value={eachOption}>{eachOption}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <Box p={2}>
            <Button variant="contained" size="medium">
              Set
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoSettings;
