import { Box, Button, IconButton, Stack, Typography, useTheme, } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Header from "../../components/Header";
import MiniBox from "../../components/MiniBox";
import Bar from "../../components/Bar";
import Bar22 from "../../components/Bar22";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { MiniData, SalesData } from "../../data/full";
import Line from "../../components/Line";
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">

      {/* Header */}
      <Box display="flex" >
        <Header title="DASHBOARD" />
      </Box>

      {/* Grid Section */}
      <Box 
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius='20px'
        >
          <MiniBox
            title="Total Customer"
            price="43,481"
            percentage="+14%"
            
            icon={
              <PeopleAltIcon
                sx={{ fontSize: "22px",color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius='20px'
        >
          <MiniBox
            title="Total Balance "
            price="$473,481"
            percentage="+14%"
            
            icon={
              <AccountBalanceWalletIcon
                sx={{ fontSize: "22px",color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius='20px'
        >
          <MiniBox
            title="Total Sales"
            price="$923,881"
            percentage="+14%"
            
            icon={
              <ShoppingCartIcon
                sx={{ fontSize: "22px",color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius='20px'
        >
          <MiniBox
            title="Items Sold"
            price="8176"
            percentage="+14%"
            
            icon={
              <SellIcon
                sx={{ fontSize: "22px",color: colors.greenAccent[600] }}
              />
            }
          />
        </Box>
        


        {/* Row 2 */}
        <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >
             Orders Summary
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $199,718
            </Typography>
          </Box>
          <Box display='flex'>
          <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[500]}
              mr='4px'
            >
              +20%
            </Typography>
            <Typography
              variant="h5"
              // fontWeight="bold"
            >
              than last week
            </Typography>
          </Box>
        </Box>
        <Box height="250px" m="-20px 0 0 0">
          <Bar />
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Sales History
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>

        {/* Contents */}
        <Box>
          {SalesData.map((sale, id) => {
            return (
              <Box
                key={id}
                width="100%"
                display="flex" 
                justifyContent="space-between" 
                alignItems="center"
                m='10px 0'
                p='0 10px'
              >
                <Box
                  display="flex" 
                  // justifyContent="space-between" 
                  alignItems="center"
                >
                  <img src={sale.img} width='50px' height='50px'/>
                  <Box  ml='8px'>
                    <Typography fontWeight="bold" fontSize='17px'>{sale.name}</Typography>
                    <Typography>{sale.time}</Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography fontWeight="bold" variant="h5">${sale.price}</Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>

      {/* ROW 3 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recently
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>

        {/* Contents */}
        <Box>
          {MiniData.map((mini, id) =>{
            return (
              <Box
              key={id}
              width="100%"
              display="flex"  
              alignItems="center"
              m='10px 0'
              p='0 10px'
              >
                <img src={mini.img} width='50px' height='50px'/>
                <Box  ml='10px'>
                  <Typography fontWeight="bold" variant="h6">{mini.name}</Typography>
                  <Typography>{mini.time}</Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight="600"
              color={colors.grey[100]}
            >
             Sales Overview
            </Typography>
          </Box>
          <Box display='flex'>
          <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.greenAccent[500]}
              mr='4px'
            >
              +9%
            </Typography>
            <Typography
              variant="h5"
              // fontWeight="bold"
            >
              more this month
            </Typography>
          </Box>
        </Box>
        <Box height="250px" m="-20px 0 0 0">
          <Line />
        </Box>
      </Box>



      {/* Row 4 */}
      </Box>
    </Box>
  )
}

export default Index