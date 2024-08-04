import React from 'react'
import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {}

function Row2({}: Props) {
  return (
    <>
    <Box borderRadius="1rem" boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)" bgcolor="#FFFF" gridArea="d"></Box>
      <Box borderRadius="1rem" boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)" bgcolor="#FFFF" gridArea="e"></Box>
      <Box borderRadius="1rem" boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)" bgcolor="#FFFF" gridArea="f"></Box>
    </>
  )
}

export default Row2