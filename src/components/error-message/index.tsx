import { Alert, AlertTitle, Box } from '@mui/material'
import { IProps } from './interface'

export const ErrorMessage = ({ message }: IProps) => (
  <Box m={4}>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  </Box>
)
