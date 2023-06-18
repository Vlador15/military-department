import { TableSquad } from '../components/table/squads.js';
import { Layout } from '../components/layout';
import { Box, TextField } from '@mui/material';
import { useState } from 'react';

export const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <Layout>
      <Box sx={{ ml: '225px', mt: '43px', mb: '113px' }}>
        <TextField
          label="Поиск по взводам"
          id="outlined-size-normal"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: '300px', background: '#D9D9D9' }}
        />
      </Box>
      <Box sx={{ ml: '225px', mr: '72px' }}>
        <TableSquad search={search} />
      </Box>
    </Layout>
  );
};
