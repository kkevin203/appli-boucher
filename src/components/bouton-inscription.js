import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export default function Button_Inscription(props) {
  const isvisible = props.lien;
  if (isvisible == null) return;
  else
    return (
      <Button
        variant="contained"
        color="secondary"
        href={props.lien}
        component={Link}
        button={props.button}
      >
        Pas encore inscrit? Crée ton compte
      </Button>
    );
}
