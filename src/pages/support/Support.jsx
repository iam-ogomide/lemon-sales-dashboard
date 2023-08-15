import { Box, Button, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarSupport from "../../components/BarSupport";
import Oppo70 from "../../components/Oppo70";
import Oppo35 from "../../components/Oppo35";
import SupportLine1 from "../../components/SupportLine1";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SupportLine2 from "../../components/SupportLine2";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Support = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box  m="20px">
      {/* Header */}
      <Box display="flex" >
        <Header title="Support Analytic" />
      </Box>

      {/* Row 1 */}
      <Stack
        width='100%'
        display='flex'
          alignItems="center"
          justifyContent="space-between"
          flex='1'
           gap={2} 
           direction={{ xs: "column", lg: "row" }} 
      >
        
        {/* User Box */}
        <Box
        backgroundColor={colors.primary[400]}
        width='100%'
        p='10px'
        >
          <Stack
            display='flex'
            flexDirection='row'
            alignItems="center"
          justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >User Activity</Typography>
            <Typography
              color={colors.grey[100]}
              fontSize='12px'
            >This week</Typography>
          </Stack>

          <Stack>
            <BarSupport />
          </Stack>

        </Box>

        {/* Oppurtunity win */}
        <Box
        backgroundColor={colors.primary[400]}
         width='100%'
         p='10px'
        
        >
          <Stack>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >Opportunity Ratio</Typography>
          </Stack>
          <Stack>
            <Oppo70 />
          </Stack>
        </Box>

        {/* Oppurtunity to win ratio */}
        <Box
        backgroundColor={colors.primary[400]}
        width='100%'
        p='10px'
        
        >
          <Stack>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >Opportunity to-win Ratio</Typography>
          </Stack>
          <Stack>
            <Oppo35 />
          </Stack>
        </Box>
    
      </Stack>

      {/* Row 2 */}
      <Stack
        direction={{ xs: "column", lg: "row" }} 
        gap={2}
      >
        <Box
          backgroundColor={colors.primary[400]}
          mt='25px'
          flex='3'
          p='10px'
        >
          <Stack
            display='flex'
            flexDirection='row'
            alignItems="center"
          justifyContent="space-between"
          >
            <Stack>
              <Typography fontWeight="bold" variant="h4">Akaade Stephen</Typography>
              <Typography>Sales Manager 1</Typography>
            </Stack>
            <Stack
              display='flex'
              flexDirection='row'
              alignItems="center"
            justifyContent="space-between"
            >
              <Typography>Converrsion Rate:</Typography>
              <Typography fontWeight="bold" ml='2px'>5%</Typography>
            </Stack>
          </Stack>
          <Stack>
            <SupportLine1 />
          </Stack>
        </Box>


        <Stack
          
          mt='25px'
          flex='1'
          p='0 10px'
          display='flex'
              flexDirection='column'
            justifyContent="space-between"
            direction={{ xs: "row", lg: "column" }} 
           
            sx={{ display: { xs: 'none', lg:'flex' }}}
           
            
            
        >
          <Stack
          
          display='flex'
              flexDirection='row'
              alignItems="center"
            justifyContent="space-between"
            padding='35px 10px'
            backgroundColor={colors.primary[400]}
          >
            <Stack
              display='flex'
              flexDirection='row'
              alignItems="center"
            justifyContent="space-between"
            >
              <Stack sx={{width:'50px', height:'50px', backgroundColor: colors.grey[700], margin:'0 15px 0 0',borderRadius:"50%"}}
                display='flex'
                alignItems="center"
              justifyContent="center"
              >
                <PersonAddIcon sx={{fontSize:'22px'}}/>
              </Stack>
              <Stack>
                <Typography>Leads</Typography>
                <Typography fontWeight="bold" variant="h4" ml='2px'>7.514</Typography>
              </Stack>
            </Stack>

            <MoreHorizIcon />
          </Stack>


          {/* Second Down box */}
          <Stack
          
          display='flex'
              flexDirection='row'
              alignItems="center"
            justifyContent="space-between"
            padding='35px 10px'
            backgroundColor={colors.primary[400]}
          >
            <Stack
               display='flex'
               flexDirection='row'
               alignItems="center"
             justifyContent="space-between"
            >
              <Stack
                sx={{width:'50px', height:'50px', backgroundColor: colors.grey[700], margin:'0 15px 0 0',borderRadius:"50%"}}
                display='flex'
                alignItems="center"
              justifyContent="center"
              >
                <AccountBalanceWalletIcon sx={{fontSize:'22px'}}/>
              </Stack>
              <Stack>
                <Typography>Opportunity</Typography>
                <Typography fontWeight="bold" variant="h4" ml='2px'>567</Typography>
              </Stack>
            </Stack>

            <MoreHorizIcon />
          </Stack>
          
        </Stack>
      </Stack>


      {/* Row 3 */}
      <Stack
        direction={{ xs: "column", lg: "row" }} 
        gap={2}
        mb='10px'
      >
        <Box
          backgroundColor={colors.primary[400]}
          mt='25px'
          flex='3'
          p='10px'
        >
          <Stack
            display='flex'
            flexDirection='row'
            alignItems="center"
          justifyContent="space-between"
          >
            <Stack>
              <Typography fontWeight="bold" variant="h4">Agidi Prince</Typography>
              <Typography>Sales Manager 2</Typography>
            </Stack>
            <Stack
              display='flex'
              flexDirection='row'
              alignItems="center"
            justifyContent="space-between"
            >
              <Typography>Converrsion Rate:</Typography>
              <Typography fontWeight="bold" ml='2px'>15%</Typography>
            </Stack>
          </Stack>
          <Stack>
            <SupportLine2 />
          </Stack>
        </Box>


        <Stack
          
          mt='25px'
          flex='1'
          p='0 10px'
          display='flex'
          backgroundColor={colors.primary[400]}
              alignItems="center"
            justifyContent="center"
        >
          <Typography fontWeight="bold" variant="h5" my='10px'>Lead Converrsion Ratio</Typography>
          <Typography fontWeight="bold" variant="h1"  mb='10px'>20:1</Typography>
          <Typography>Unqualified leads  turned into customers</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Support