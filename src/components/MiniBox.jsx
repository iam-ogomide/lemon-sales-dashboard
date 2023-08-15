import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const MiniBox = ({ title, price, percentage, icon}) => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" backgroundColor={colors.primary[400]}  p='20px' flexWrap='wrap'>
        <Box>
            <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}>{title}</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt='15px'>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: colors.grey[100] }}
                >{price}
                </Typography>
                <Box 
                    width='40px' 
                    height='40px' 
                    borderRadius="50%" 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center"  
                    sx={{ border: 3,borderColor:colors.greenAccent[600] }}>
                {icon}
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default MiniBox
