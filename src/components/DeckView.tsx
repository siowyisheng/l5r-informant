/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import { Deck } from './Main'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import FormLoadDeckFromURL from './FormLoadDeckFromURL'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      flex: '0 0 auto',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 0,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
    deckUrlField: {
      flex: '1 0 250px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      '& .MuiFormControl-root': {
        marginTop: 0,
      },
    },
  })
)

export const DeckView: React.FC<{
  deck: Deck
  setDeck: (deck: Deck) => void
  goToDeck: () => void
}> = ({ deck, setDeck, goToDeck }) => {
  const classes = useStyles()
  const cards = deck
    .map(card => `${card.numUnseen + card.numSeen} ${card.name}`)
    .join('\n')
  const [value, setValue] = useState(cards)

  const handleSubmit = () => {
    const _cards = value.split('\n')
    const _deck = _cards
      .map(card => {
        if (!isNaN(parseInt(card.charAt(0), 10))) {
          return {
            name: card.slice(2).replace(/\//g, ''),
            numUnseen: parseInt(card.charAt(0), 10),
            numSeen: 0,
          }
        }
        return null
      })
      .filter(Boolean)
    setDeck(_deck as any[])
    goToDeck()
  }

  return (
    <React.Fragment>
      {/* <label htmlFor="deckLink">Link</label>
      <input style={{ width: '300px' }} id="deckLink" type="text" /> */}
      <FormLoadDeckFromURL />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-multiline-flexible"
          label="Conflict deck"
          multiline
          rowsMax="100"
          value={value}
          onChange={e => setValue(e.target.value)}
          className={classes.textField}
          style={{ width: 300 }}
          margin="normal"
        />
        <Button
          type="submit"
          onClick={() => handleSubmit()}
          variant="contained"
        >
          Load Deck
        </Button>
      </form>
    </React.Fragment>
  )
}
