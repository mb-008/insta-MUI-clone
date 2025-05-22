import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Avatar,
  Typography,
  Button
} from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Explore as ExploreIcon,
  Movie as MovieIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Add as AddIcon,
  Person as PersonIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid #333',
          bgcolor: '#121212',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '26px',
            mb: 4,
            mt: 1,
            ml: 1
          }}
        >
          Instagram
        </Typography>

        <List sx={{ flexGrow: 1 }}>
          {[
            { text: 'Home', icon: <HomeIcon /> },
            { text: 'Search', icon: <SearchIcon /> },
            { text: 'Explore', icon: <ExploreIcon /> },
            { text: 'Reels', icon: <MovieIcon /> },
            { text: 'Messages', icon: <MessageIcon /> },
            { text: 'Notifications', icon: <NotificationsIcon /> },
            { text: 'Create', icon: <AddIcon /> },
            { text: 'Profile', icon: <PersonIcon /> },
          ].map((item, index) => (
            <ListItem
              button
              key={item.text}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                '&:hover': {
                  bgcolor: '#333'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

        <ListItem
          button
          sx={{
            borderRadius: 2,
            '&:hover': {
              bgcolor: '#333'
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
