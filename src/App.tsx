import { Grid } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ElectronicsListContainer } from './modules/electronics-list'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container minHeight={'100vh'}>
        <Grid item xs={true}>
          <ElectronicsListContainer />
        </Grid>
      </Grid>
    </QueryClientProvider>
  )
}

export default App
