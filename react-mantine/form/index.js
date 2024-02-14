import React from 'react';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';


import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const MantineForm = () => {


  return (
    <div>
      <MantineProvider theme={theme}>
      <form>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
        />

      </form>    
      </MantineProvider>
    </div>
  );
};

export default MantineForm;
