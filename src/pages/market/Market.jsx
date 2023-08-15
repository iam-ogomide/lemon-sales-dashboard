import { Box, Button, IconButton, Typography, useTheme, Stack } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import MarketMiniBox from "../../components/MarketMiniBox";
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MarketLine from "../../components/MarketLine";
import Apex from "../../components/Apex";
import SocialLine from "../../components/SocialLine";
import BarMarket from "../../components/BarMarket";

const Market = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">

      
      {/* Header */}
      <Box display="flex" >
        <Header title="Marketing" />
      </Box>

      {/* Row 1 */}
      <Stack
        width='100%'
        display='flex'
        alignItems="center"
        justifyContent="space-between"
        flexWrap='nowrap'
        // flex='1'
        gap={2} 
        direction={{ xs: "column", lg: "row" }} 
      >
        <MarketMiniBox 
          icon1={
            <PersonIcon
              sx={{ fontSize: "35px",color: colors.greenAccent[600] }}
            />
          }
          icon2={
            <MoreVertIcon
              sx={{ fontSize: "20px",color: colors.greenAccent[600] }}
            />
          }
          name='Lead'
          number='3,121'
          percentage='+3%'
        />
             <MarketMiniBox 
                icon1={
                    <PeopleAltIcon
                      sx={{ fontSize: "35px",color: colors.greenAccent[600] }}
                    />
                }
                icon2={
                    <MoreVertIcon
                      sx={{ fontSize: "20px",color: colors.greenAccent[600] }}
                    />
                }
                name='User'
                number='4,193'
                percentage='+13%'
            />
            <MarketMiniBox 
                icon1={
                    <TrendingUpIcon
                      sx={{ fontSize: "35px",color: colors.greenAccent[600] }}
                    />
                }
                icon2={
                    <MoreVertIcon
                      sx={{ fontSize: "20px",color: colors.greenAccent[600] }}
                    />
                }
                name='User to lead'
                number='3.9%'
                percentage={
                    <Typography sx={{color:'red'}}>-10%</Typography>
                }
            />
      </Stack>

      {/* Row 2 */}
      <Stack
        direction={{ xs: "column", lg: "row" }} 
        gap={2}
        
      >
        <Stack
          backgroundColor={colors.primary[400]}
          mt='25px'
          flex='2'
          p='10px'
          flexWrap='wrap'
          overflow='scroll'
        >
          <Box
      >
        <Box
          mt="20px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight="600"
              color={colors.grey[100]}
            >
            Market overview
            </Typography>
            <Typography
              fontSize='14px'
              color={colors.grey[100]}
            >
            This is the market analysis report
            </Typography>
          </Box>
          <Box display='flex'>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          </Box>
        </Box>
        <Box height="250px" m="-20px 0 0 0">
          <MarketLine />
        </Box>
      </Box>
        </Stack>


        {/* Left Box */}
        <Stack
       mt='20px'
       flex='1'
       p='15px'
       display='flex'
           flexDirection='column'
         justifyContent="space-between"
         backgroundColor={colors.primary[400]}
         flexWrap='wrap'
          overflow='scroll'
         
      >
        
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          colors={colors.grey[100]}
          // p="15px"
        >
          <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
            Current statistic
          </Typography>
          
        </Box>

        {/* Contents */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center" 
          
        >
          <Apex />
        </Box>
      </Stack>
      </Stack>


      {/* Row 3 */}
      <Stack
        direction={{ xs: "column", lg: "row" }} 
        gap={2}
        mb='10px'
        width='100%'
        
      >
        <Box
        flex='3'
        backgroundColor={colors.primary[400]}
        mt="25px"
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight="600"
              color={colors.grey[100]}
            >
            Budget Utilization report
            </Typography>
            <Typography
              fontSize='14px'
              color={colors.grey[100]}
            >
            You can see details of all your budget expenditures
            </Typography>
          </Box>
          </Box>
          
        </Box>
        <Box height="250px" m="-20px 0 0 0">
          <BarMarket />
        </Box>
      </Box>

      <Stack
        backgroundColor={colors.primary[400]}
        overflow="auto"
        flex='1'
        mt="25px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
            Social Interactions
          </Typography>
          
        </Box>

        {/* Contents */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center" 
        >
          <SocialLine />
        </Box>
      </Stack>
      </Stack>
    </Box>
  )
}

export default Market