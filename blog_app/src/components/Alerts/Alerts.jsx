import { Alert, AlertTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

const ErrorAlerts = ({ severity, title, message, onClose }) => {
  return (
    <Alert severity={severity} onClose={onClose}>
    <AlertTitle>{title}</AlertTitle>
    {message}
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={onClose}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  </Alert>
  )
}

export {ErrorAlerts}