import { Box, Grid, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';
import PreviewSection from '../components/PreviewSection';
import InstagramPost from '../components/InstagramPost';

const Dashboard = () => {
  return (
    <Box sx={{
      display: 'flex',
      minHeight: '100vh',
      bgcolor: '#121212',
      color: 'white'
    }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: '#1e1e1e',
                boxShadow: 'none',
                border: '1px solid #333',
              }}
            >
              <PreviewSection />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
