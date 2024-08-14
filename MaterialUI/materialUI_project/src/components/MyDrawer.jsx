import { Drawer } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Typography } from '@mui/material';

export const MyDrawer = ({ showDrawer, setShowDrawer, items, rightAnchor }) => {
  return (
    <Drawer
      sx={{ zIndex: rightAnchor ? 1100 : 1000 }}
      PaperProps={{
        sx: rightAnchor ? { width: '50%' } : { top: 55 },
      }}
      anchor={rightAnchor ? 'right' : 'top'}
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
    >
      {items.map((item) => (
        <MenuItem key={item} onClick={() => setShowDrawer(false)}>
          <Typography textAlign="center">{item}</Typography>
        </MenuItem>
      ))}
    </Drawer>
  );
};
