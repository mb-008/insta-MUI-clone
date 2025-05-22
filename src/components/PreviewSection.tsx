import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Grid,
  Divider,
  Button,
  Chip,
  Stack
} from '@mui/material';
import InstagramPost from './InstagramPost';
import FilterOptions from './FilterOptions';

const PreviewSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        When someone comments on
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            '.MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          <Tab
            label="Preview"
            sx={{
              borderRadius: '16px',
              minWidth: 'auto',
              px: 2,
              backgroundColor: activeTab === 0 ? '#333' : 'transparent',
              color: 'white',
              '&.Mui-selected': {
                color: 'white',
              },
            }}
          />
          <Tab
            label="Go Live"
            sx={{
              borderRadius: '16px',
              minWidth: 'auto',
              ml: 1,
              px: 2,
              backgroundColor: activeTab === 1 ? '#333' : 'transparent',
              color: 'white',
              '&.Mui-selected': {
                color: 'white',
              },
            }}
          />
        </Tabs>
      </Box>

      <Divider sx={{ mb: 2, borderColor: '#333' }} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FilterOptions />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: '#1e1e1e',
              borderRadius: 2,
              p: 2,
              display: 'flex',
              justifyContent: 'center',
              border: '1px solid #333',
            }}
          >
            <InstagramPost />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Stack direction="row" spacing={1}>
              <Button variant="contained" color="primary" size="small">
                Post
              </Button>
              <Button variant="outlined" size="small" sx={{ color: 'white', borderColor: '#333' }}>
                Comments
              </Button>
              <Button variant="outlined" size="small" sx={{ color: 'white', borderColor: '#333' }}>
                DM
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewSection;
