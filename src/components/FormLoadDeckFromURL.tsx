/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import {
  TextField,
  Button,
  createStyles,
  makeStyles,
  Theme,
  FormControl,
  InputLabel,
  Input,
  Box,
} from '@material-ui/core'
import useFetch from 'react-fetch-hook'

const FormLoadDeckFromURL: React.FC = () => {
  const [deckUrl, setDeckUrl] = useState('')
  const { data, isLoading } = useFetch(deckUrl, {
    formatter: response => response.text(),
  })
  return (
    <React.Fragment>
      {`${data}`}
      <form
        style={{ display: 'flex', margin: 0 }}
        noValidate
        autoComplete="off"
      >
        <Box style={{ flex: '1 0 100px' }}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="deck-url">
              Fiverings / Bushi Builder URL
            </InputLabel>
            <Input
              id="deck-url"
              value={deckUrl}
              onChange={e => setDeckUrl(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box style={{ flex: '0 0 auto' }}>
          <Button onClick={() => {}} variant="contained">
            Load from URL
          </Button>
        </Box>
      </form>
    </React.Fragment>
  )
}
export default FormLoadDeckFromURL
