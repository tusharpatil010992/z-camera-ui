import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { videoFormatOptions, frameRateOptions } from "../utils";

import { FormControl, MenuItem, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CameraParams = (props: any) => {
  const [ddState, setDDState] = useState<any>({});

  const {
    cameras,
    setCameras,
    cameraConnected,
    setCameraConnected,
    cameraStatus,
    setcameraStatus,
  } = props;

  const handleChange = (event: SelectChangeEvent, cameraName: string) => {
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

  console.log("ddState", ddState);

  return (
    <Box p={5}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Parameters</TableCell>
              {Object.keys(cameras).map((cameraName: string) => (
                <TableCell align="right">{cameraName}</TableCell>
              ))}
              <TableCell align="right">Master</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Video Format
              </TableCell>
              {Object.keys(cameras).map((cameraName: string) => (
                <TableCell component="th" scope="row">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Video Format
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={
                        ddState?.[cameraName]?.[`videoFormat${cameraName}`] ||
                        ""
                      }
                      label="Video Format"
                      onChange={(e) => handleChange(e, cameraName)}
                      size="medium"
                      name={`videoFormat${cameraName}`}
                    >
                      {videoFormatOptions.map((eachOption: string) => (
                        <MenuItem value={eachOption}>{eachOption}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              ))}
              <TableCell component="th" scope="row">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Video Format
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ddState?.["master"]?.["videoFormatmaster"] || ""}
                    label="Video Format"
                    onChange={(e) => handleChange(e, "master")}
                    size="medium"
                    name={`videoFormatmaster`}
                  >
                    {videoFormatOptions.map((eachOption: string) => (
                      <MenuItem value={eachOption}>{eachOption}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Frame Rate
              </TableCell>
              {Object.keys(cameras).map((cameraName: string) => (
                <TableCell component="th" scope="row">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Frame Rate
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={
                        ddState?.[cameraName]?.[`frameRate${cameraName}`] || ""
                      }
                      label="Frame Rate"
                      onChange={(e) => handleChange(e, cameraName)}
                      size="medium"
                      name={`frameRate${cameraName}`}
                    >
                      {frameRateOptions.map((eachOption: string) => (
                        <MenuItem value={eachOption}>{eachOption}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              ))}
              <TableCell component="th" scope="row">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Frame Rate
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ddState?.["master"]?.["frameRatemaster"] || ""}
                    label="Frame Rate"
                    onChange={(e) => handleChange(e, "master")}
                    size="medium"
                    name="frameRatemaster"
                  >
                    {frameRateOptions.map((eachOption: string) => (
                      <MenuItem value={eachOption}>{eachOption}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default CameraParams;
