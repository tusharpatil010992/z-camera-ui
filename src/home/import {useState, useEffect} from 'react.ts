import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import {formConfig} from '../config/home'
import { useForm } from 'react-hook-form';
import { Button, Container, Box } from '@mui/material';


import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


export const Applicaton = () => {
    const [cameraIPConfig, setCameraIPConfig] = useState<any>([]);
    const [cameraCount, setCameraCount] = useState<number>(1);
    useEffect(() => {


        setCameraIPConfig(formConfig);
    },[])

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data:any) => {
        console.log('Form Submitted:', data);
      };


  return (
    <Box p={10}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </form>
    </Box>
  )
}


        <Box sx={{width: '100%'}}>
        
        </Box>
 
 
         <Box>
         <Button type='button'>
             Add More
         </Button>
         </Box>
 
        <Box>
        <Button type="submit" variant="contained" color="primary" sx={{margin: "10px 0"}}>
           Submit
         </Button>
        </Box>
       </form>