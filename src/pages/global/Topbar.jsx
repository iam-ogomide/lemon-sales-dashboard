import { Box, IconButton, useTheme,Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import img from "../../assets/img1.png";


const Topbar = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Box  display="flex" justifyContent="space-between" p={2}>

      {/* Search Bar */}
      <Box display="flex" >
      <Typography
              variant="h3"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" ,  display: { xs: 'none', sm: 'block' }}}
            >
              Overview
            </Typography>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode} sx={{width:'40px', height:'40px', backgroundColor: colors.grey[700],borderRadius:"10px"}}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton sx={{width:'40px', height:'40px', backgroundColor: colors.grey[700], margin:'0 15px',borderRadius:"10px"}}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <img src={img} alt="/" width='40px' height='40px'/>
        <IconButton>
            <ArrowDropDownIcon />
        </IconButton>
        
      </Box>
    </Box>

  )
}

export default Topbar