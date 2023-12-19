import { Box, Grid, Theme, Typography, useMediaQuery } from '@mui/material'

export const TopBar = () => {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  return (
    <Box bgcolor="black" py={2} sx={{ display: mdDown ? 'none' : 'block' }}>
      <Box mx="auto" maxWidth={'lg'}>
        <Grid
          display="flex"
          gap={2}
          justifyContent={'space-between'}
          alignItems={'center'}
          color={'white'}
          width={'100%'}
          px={3}
        >
          <Typography variant="body1">
            Mon - Thu: <strong>9:00 AM - 5:30 PM</strong>
          </Typography>
          <Typography variant="body1">
            Visit our showroom in 1234 Street Adress City Address, 1234{' '}
            <strong color="white">Contact us</strong>
          </Typography>
          <Typography variant="body1">
            <strong>(00) 1234 5678</strong>
          </Typography>
        </Grid>
      </Box>
    </Box>
  )
}
