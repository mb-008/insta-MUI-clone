import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Divider,
  Button,
  Stack,
  Avatar,
  Grid
} from '@mui/material';

const FilterOptions = () => {
  return (
    <Box sx={{ bgcolor: '#1e1e1e', p: 2, borderRadius: 2, border: '1px solid #333' }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" component="div" gutterBottom>
          a specific post or reel
        </Typography>

        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item>
            <Avatar alt="Post 1" src="/images/whatsapp-3b.webp" />
          </Grid>
          <Grid item>
            <Avatar alt="Post 2" src="/images/whatsapp-3b.webp" />
          </Grid>
          <Grid item>
            <Avatar alt="Post 3" src="/images/whatsapp-3b.webp" />
          </Grid>
        </Grid>

        <Button
          variant="text"
          sx={{
            color: '#3797EF',
            p: 0,
            textTransform: 'none',
            fontSize: '0.875rem'
          }}
        >
          Show All
        </Button>
      </Box>

      <Divider sx={{ my: 2, borderColor: '#333' }} />

      <List sx={{ p: 0 }}>
        <ListItem sx={{ px: 0, py: 1 }}>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2">any post or reel</Typography>
                <Chip
                  label="on"
                  size="small"
                  sx={{
                    bgcolor: '#3797EF',
                    color: 'white',
                    height: '20px',
                    fontSize: '0.7rem'
                  }}
                />
              </Box>
            }
          />
        </ListItem>

        <ListItem sx={{ px: 0, py: 1 }}>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2">next post or reel</Typography>
                <Chip
                  label="on"
                  size="small"
                  sx={{
                    bgcolor: '#3797EF',
                    color: 'white',
                    height: '20px',
                    fontSize: '0.7rem'
                  }}
                />
              </Box>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 2, borderColor: '#333' }} />

      <Button
        variant="text"
        sx={{
          color: '#fff',
          p: 0,
          bgcolor: 'transparent',
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '0.875rem'
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default FilterOptions;
