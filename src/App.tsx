import { Grid, Typography } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container minHeight={'100vh'}>
        <Grid item xs={true}>
          <Typography variant="h1">Our Commerce</Typography>
        </Grid>
      </Grid>
    </QueryClientProvider>
  )
}

export default App
