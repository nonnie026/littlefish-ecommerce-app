import { Typography } from '@mui/material'

import { IProps } from './interface'

export const TruncatedText = ({ minStringLength, text }: IProps) => {
  const truncatedString =
    text.length > minStringLength
      ? `${text.substring(0, minStringLength)}...`
      : text

  return (
    <Typography data-testid="truncated-text" variant="body14">
      {truncatedString}
    </Typography>
  )
}
