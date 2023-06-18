import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function StatsCard({ card }) {
  return (
    <Card
      sx={{
        width: 270,
        height: 164,
        background: card.backgroundColor,
        borderRadius: '5px',
        mr: '35px',
      }}
    >
      <CardContent sx={{ color: '#fff', padding: '20px' }}>
        <Typography variant="innerhit" sx={{ fontSize: 16 }} gutterBottom>
          {card.label}
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{ mt: '20px' }}
        >
          <Typography
            variant="innerhit"
            sx={{ fontSize: 64, fontWeight: 'bold' }}
          >
            {card.title}
          </Typography>

          <Typography variant="innerhit" sx={{ fontSize: 20 }}>
            {card.desc}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
