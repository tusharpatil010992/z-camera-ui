import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Badge, Box, IconButton, Tabs } from "@mui/material";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField, Chip } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ipRegex =
  /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

const schema = yup.object().shape({
  items: yup.array().of(
    yup.object().shape({
      value: yup
        .string()
        .required("This field is required")
        .matches(ipRegex, "Invalid IP address"),
    })
  ),
});

const Application = (props: any) => {
  const { pageState, setPageState } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      items: [{ value: "" }],
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data: any) => {
    setPageState((prev: any) => {
      return {
        ...prev,
        domains: data.items,
      };
    });
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPageState((prev: any) => {
      return {
        ...prev,
        selectedCamera: event.target.value as string,
      };
    });
  };

  return (
    <>
      <Box p={5}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {fields.map((field, index) => {
            const fieldName: any = `items[${index}].value`;

            let isError = errors.items?.[index]?.value || false;
            let style: any = isError
              ? {
                  margin: "0 0 5% 0",
                }
              : {};
            if (control._formValues.items[index]?.value == "") {
              isError = true;
            }
            return (
              <Grid container spacing={2} key={`IP-DOMAIN-${index}`}>
                <Grid size={6}>
                  <Box
                    key={field.id}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                  >
                    <Controller
                      name={fieldName}
                      control={control}
                      defaultValue={field.value}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={`Camera ${index + 1} IP`}
                          variant="outlined"
                          fullWidth
                          error={!!errors.items?.[index]?.value}
                          helperText={errors.items?.[index]?.value?.message}
                          size="medium"
                        />
                      )}
                    />
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => {
                        if (fields.length > 1) {
                          remove(index);
                        }
                      }}
                      sx={style}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid>
                  <Badge color={isError ? "error" : "success"} badgeContent="">
                    <VideocamIcon fontSize="large" />
                  </Badge>
                  <Chip label="Rec" color="error" sx={{ marginLeft: "10px" }} />
                </Grid>
              </Grid>
            );
          })}

          <Button
            variant="contained"
            onClick={() => append({ value: "" })}
            sx={{ mt: 2, mr: 2 }}
            size="medium"
            color="secondary"
          >
            Add More
          </Button>

          <Box marginTop={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              size="medium"
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
      {Array.isArray(pageState.domains) && pageState.domains.length > 0 && (
        <Box p={5}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Camera
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={props.selectedCamera}
                  label="Select Camera"
                  onChange={handleChange}
                  size="medium"
                >
                  <MenuItem value="ALL">ALL Camera</MenuItem>
                  {pageState.domains.map((eachDomain: any, index: number) => (
                    <MenuItem value={eachDomain.value}>{`Camera ${
                      index + 1
                    }`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Application;
