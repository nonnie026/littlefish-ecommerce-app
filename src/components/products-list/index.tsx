import { CheckCircle } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography
} from '@mui/material'
import { TruncatedText } from '../../components/truncated-text'
import { IProps } from './interface'

export const ProductsList = ({ products, handleAddToCart }: IProps) => {
  return (
    <Grid container justifyContent={'space-between'} rowGap={5.75}>
      {products?.map((product) => (
        <Grid
          key={product.id}
          item
          flexGrow={1}
          xs={12}
          sm={6}
          md={4}
          lg={2.25}
          px={2}
        >
          <Card>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Box>
                <Box
                  fontSize={10}
                  py={0.875}
                  pr={0.625}
                  pl={1}
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                  color={'success.main'}
                >
                  <CheckCircle fontSize="inherit" color="success" />
                  <Typography variant="inherit">in stock</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'contain', width: 150, height: 150 }}
                  />
                </Box>
                <CardContent sx={{ px: 0, py: 2 }}>
                  <Box alignItems="center" display="flex" mb={2} gap={1.25}>
                    <Rating
                      name="read-only"
                      size="small"
                      value={product.rating.rate}
                      readOnly
                    />
                    <Typography variant="body12" color="grey.400">
                      Reviews ({product.rating.count})
                    </Typography>
                  </Box>
                  <TruncatedText text={product.title} minStringLength={60} />
                </CardContent>
              </Box>
              <CardActions sx={{ p: 0 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={'space-between'}
                  flexGrow={1}
                >
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    size="small"
                    color="primary"
                  >
                    Add To Cart
                  </Button>
                </Box>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
