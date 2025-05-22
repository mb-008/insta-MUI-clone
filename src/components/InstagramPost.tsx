import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Paper,
  Stack,
  Divider
} from '@mui/material';
import {
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  SendOutlined as SendOutlinedIcon,
  BookmarkBorder as BookmarkBorderIcon,
  MoreHoriz as MoreHorizIcon,
  Home as HomeIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Explore as ExploreIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const InstagramPost = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 330,
        bgcolor: 'black',
        color: 'white',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Phone frame */}
      <Box sx={{ position: 'relative', width: '100%' }}>
        {/* Instagram story header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
            borderBottom: '1px solid #262626',
          }}
        >
          <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
            {'<'}
          </IconButton>
          <Typography variant="body2" sx={{ mx: 'auto', fontWeight: 'bold' }}>
            Instagram
          </Typography>
        </Box>

        {/* Post header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
          }}
        >
          <Avatar
            src=""
            sx={{ width: 32, height: 32, mr: 1, bgcolor: '#3797EF' }}
          >
            I
          </Avatar>
          <Typography variant="body2" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            instagram
          </Typography>
          <IconButton size="small" sx={{ color: 'white' }}>
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Post image */}
        <Box
          component="img"
          src="/images/whatsapp-3b.webp"
          alt="Instagram Post"
          sx={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />

        {/* Post actions */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
              <SendOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
          <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
            <BookmarkBorderIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Likes */}
        <Box sx={{ px: 1, pb: 0.5 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}>
            Liked by <Typography component="span" fontWeight="bold">instagram</Typography> and others
          </Typography>
        </Box>

        {/* Caption */}
        <Box sx={{ px: 1, pb: 1 }}>
          <Typography variant="body2" sx={{ fontSize: '0.8rem', lineHeight: 1.2 }}>
            <Typography component="span" fontWeight="bold" sx={{ fontSize: '0.8rem' }}>
              instagram
            </Typography>{' '}
            WhatsApp reaches 3 billion users! Founded in 2009, the app has come a long way. It's now used in over 180 countries, with 100 billion messages sent each day. A big achievement for Meta, as they continue to connect people worldwide.
          </Typography>
        </Box>

        {/* Bottom navigation */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            borderTop: '1px solid #262626',
          }}
        >
      <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
        <HomeIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
        <SearchIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
        <AddIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
        <ExploreIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <IconButton size="small" sx={{ color: 'white', p: 0.5 }}>
        <PersonIcon sx={{ fontSize: 30 }} />
      </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default InstagramPost;
