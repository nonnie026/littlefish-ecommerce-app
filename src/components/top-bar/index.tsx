import { Grid, Typography } from '@mui/material'

export const TopBar = () => {
  return (
    <>
      <Grid
        display="flex"
        gap={2}
        justifyContent={'space-between'}
        alignItems={'center'}
        bgcolor={'black'}
        color={'white'}
        width={'100%'}
      >
        <Typography variant="body1">Mon - Thu: 9:00 AM - 5:30 PM</Typography>
        <Typography variant="body1">
          Visit our showroom in 1234 Adress city, 1234 Contact us
        </Typography>
        <Typography variant="body1">(00) 1234 5678</Typography>
      </Grid>
    </>
  )
}
