import { Fragment, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { wait } from '../../utils/wait';
import { X as XIcon } from '../../icons/x';
import { Tip } from '../tip';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Test from '../test.json'
import Link from 'next/link';
import React from 'react';
import router, {useRouter} from 'next/router'
const results = {
  Platform: [
    {
      description: 'Provide your users with the content they need, exactly when they need it, by building a next-level site search experience using our AI-powered search API.',
      title: 'Level up your site search experience with our hosted API',
      path: 'Users / Api-usage'
    },
    {
      description: 'Algolia is a search-as-a-service API that helps marketplaces build performant search experiences at scale while reducing engineering time.',
      title: 'Build performant marketplace search at scale',
      path: 'Users / Api-usage'
    }
  ],
  Resources: [
    {
      description: 'Algolia’s architecture is heavily redundant, hosting every application on …',
      title: 'Using NetInfo API to Improve Algolia’s JavaScript Client',
      path: 'Resources / Blog posts'
    },
    {
      description: 'Algolia is a search-as-a-service API that helps marketplaces build performant search experiences at scale while reducing engineering time.',
      title: 'Build performance',
      path: 'Resources / UI libraries'
    }
  ]
};

export const ContentSearchDialog = (props) => {
  const { onClose, open, ...other } = props;
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowResults(false);
    setIsLoading(true);
    // Do search here
    await wait(1500);
    setIsLoading(false);
    setShowResults(true);
    router.push("/dashboard/websiteprofile/")
    onClose()
  };

  const top100Films = [
    { title: Test.domain},
  ]

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      open={open}
      {...other}>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          py: 2
        }}
      >
        <Typography variant="h6">
          Search
        </Typography>
        <IconButton
          color="inherit"
          onClick={onClose}
        >
          <XIcon fontSize="small" />
        </IconButton>
      </Box>
      <DialogContent>
        
        <form onSubmit={handleSubmit}>
          <Tip message="Search by entering a keyword and pressing Enter" />
          <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search"/>
         }
      />
        </form>
      
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 3
            }}
          >
            <CircularProgress />
          </Box>
        )}
        
        
        {showResults && (
          <>
         
             </>
        )}
       
      </DialogContent>
    </Dialog>
  );
};

ContentSearchDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
