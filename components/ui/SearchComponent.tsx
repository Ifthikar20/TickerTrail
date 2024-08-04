// components/SearchComponent.tsx
"use client"
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

type SearchComponentProps = {
  onSearch: (term: string) => void;
};

const SearchComponent: React.FC<SearchComponentProps> = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
      console.log('Search query:', searchTerm);
      onSearch(searchTerm);
    };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(255, 255, 255, 0.4)" // Slightly white with some transparency
        p={2}
        borderRadius="1rem"
        boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)"
        width="80%"
        maxWidth="600px"
      >
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          variant="outlined"
          fullWidth
          style={{ marginRight: '1rem' }}
        />
        <Button onClick={handleSearch} variant="contained" color="primary">
          Search here
        </Button>
      </Box>
    </Box>
  );
};

export default SearchComponent;
