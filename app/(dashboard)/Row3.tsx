import React from 'react'
import { Box, useMediaQuery, useTheme } from "@mui/material";

type Props = {}

function Row3({}: Props) {
  return (
    <>
    <Box borderRadius="1rem" boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)" bgcolor="#FFFF" gridArea="g"></Box>
      <Box borderRadius="1rem" boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)" bgcolor="#FFFF" gridArea="h"></Box>
      <Box borderRadius="1rem" boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)" bgcolor="#FFFF" gridArea="i"></Box>
      <Box borderRadius="1rem" boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)" bgcolor="#FFFF" gridArea="j"></Box>
    </>
  )
}

export default Row3