import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const MarketMiniBox = ({icon1, icon2, name, number, percentage}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%"  backgroundColor={colors.primary[400]} p='10px' 
    >
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pt='10px'
        >
            <IconButton>{icon1}</IconButton>
            <IconButton>{icon2}</IconButton>
        </Box>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pt='15px'
        >
            <Box>
                <Typography
                    variant="h5"
                    sx={{ color: colors.grey[100] }}
                >
                    {name}
                </Typography>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                >
                    {number}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h5"
                   
                    sx={{color: colors.greenAccent[400]}}
                >{percentage}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default MarketMiniBox