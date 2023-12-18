import { Grid } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HomeContainer } from './modules/home'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container minHeight={'100vh'}>
        <Grid item xs={true}>
          <HomeContainer />
        </Grid>
      </Grid>
    </QueryClientProvider>
  )
}

export default App
