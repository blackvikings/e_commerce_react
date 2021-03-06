import React from 'react'
import { InputLabel, Select,  MenuItem, Button, Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AddressForm = () => {

    const methods = useForm();
    
    return (
        <>
            <Typography variant='h6' gutterBottom>Shpping Address</Typography>
            <FormProvider {...methods}> 
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name' />
                        <FormInput required name='lastName' label='Last Name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='zip' label='ZIP / Postal  Code' />
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
