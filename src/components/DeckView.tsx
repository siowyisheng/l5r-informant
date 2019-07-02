import React, { useState } from 'react'
import { Deck } from './Main'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
  })
)

export const DeckView: React.FC<{
  deck: Deck
  setDeck: (deck: Deck) => void
}> = ({ deck, setDeck }) => {
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
  }

  return (
    <>
      {/* <label htmlFor="deckLink">Link</label>
      <input style={{ width: '300px' }} id="deckLink" type="text" /> */}
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-multiline-flexible"
          label="Decklist"
          multiline
          rowsMax="100"
          value={value}
          onChange={e => setValue(e.target.value)}
          className={classes.textField}
          style={{ width: 300 }}
          margin="normal"
        />
      </form>
      <Button onClick={() => handleSubmit()} variant="contained">
        Load Deck
      </Button>
    </>
  )
}
