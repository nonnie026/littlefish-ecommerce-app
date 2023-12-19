import { Box } from '@mui/material'
import Banner from '../../assets/banner.svg'

export const BannerImage = () => (
  <Box
    width="100%"
    bgcolor="white"
    position="relative"
    borderBottom="1px solid #ccc"
    zIndex={0}
    maxWidth={'lg'}
    mx="auto"
  >
    <Box
      component="img"
      src={Banner}
      alt="banner"
      width="100%"
      height="100%"
      sx={{ objectFit: 'cover' }}
    />
  </Box>
)
