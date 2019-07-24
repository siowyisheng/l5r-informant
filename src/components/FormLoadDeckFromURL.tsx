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
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 0,
      width: 240,
    },
    input: {
      width: 240,
    },
    root: {
      flex: '1 0 250px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      '& .MuiFormControl-marginNormal': {
        marginTop: 0,
      },
    },
  })
)

const FormLoadDeckFromURL: React.FC = () => {
  const [deckUrl, setDeckUrl] = useState('')
  const classes = useStyles()
  return (
    <form style={{ margin: 0 }} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="deck-url">
          Fiverings / Bushi Builder URL
        </InputLabel>
        <Input
          className={classes.input}
          id="deck-url"
          value={deckUrl}
          onChange={e => setDeckUrl(e.target.value)}
        />
      </FormControl>
      {/* <TextField
        id="standard-name"
        label="Name"
        classes={classesTextField}
        value={deckUrl}
        onChange={e => setDeckUrl(e.target.value)}
        margin="normal"
      /> */}
      <Button type="submit" onClick={() => {}} variant="contained">
        Load from URL
      </Button>
    </form>
  )
}
export default FormLoadDeckFromURL
