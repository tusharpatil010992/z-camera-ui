import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Box,
  FormHelperText,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const FormFields = ({ config, control, errors }:any) => {
  const renderField = (field:any) => {
    switch (field.type) {
      case 'text':
        return (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            rules={field.validation}
            render={({ field: controllerField }) => (
              <TextField
                {...controllerField}
                label={field.label}
                placeholder={field.placeholder}
                fullWidth
                margin="normal"
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
              />
            )}
          />
        );

      case 'select':
        return (
          <FormControl
            key={field.name}
            fullWidth
            margin="normal"
            error={!!errors[field.name]}
          >
            <InputLabel>{field.label}</InputLabel>
            <Controller
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field: controllerField }) => (
                <Select {...controllerField} label={field.label}>
                  {field.options.map((option:any) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText>{errors[field.name]?.message}</FormHelperText>
          </FormControl>
        );

      case 'radio':
        return (
          <FormControl
            key={field.name}
            component="fieldset"
            margin="normal"
            error={!!errors[field.name]}
          >
            <FormLabel component="legend">{field.label}</FormLabel>
            <Controller
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field: controllerField }) => (
                <RadioGroup row {...controllerField}>
                  {field.options.map((option:any) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
              )}
            />
            <FormHelperText>{errors[field.name]?.message}</FormHelperText>
          </FormControl>
        );

      default:
        return null;
    }
  };

  return <Box>{config.map(renderField)}</Box>;
};

export default FormFields;
