import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { CardChip } from './CardChip'
import Typography from '@material-ui/core/Typography'
import { Deck } from './Main'
import sumBy from 'lodash/sumBy'
import round from 'lodash/round'
import { compute } from './Utils'
import { Button } from '@material-ui/core'
// import useFetch from 'react-fetch-hook'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
)

export const OddsView: React.FC<{
  deck: Deck
  setDeck: (deck: Deck) => void
}> = ({ deck, setDeck }) => {
  const classes = useStyles()
  const [cards, setCards] = React.useState('4')
  // const { isLoading, data } = useFetch('https://api.fiveringsdb.com/cards', {
  //   method: 'GET',
  // })
  const unseenCount = sumBy(deck, card => card.numUnseen)
  const seenCount = sumBy(deck, card => card.numSeen)
  const numCards = parseInt(cards, 10)
  const odds = {
    one: String(round(100 * compute(unseenCount, 1, numCards, 0))),
    two: String(round(100 * compute(unseenCount, 2, numCards, 0))),
    three: String(round(100 * compute(unseenCount, 3, numCards, 0))),
  }
  const handleUnseenCardClick = (i: number) => {
    setDeck(
      deck.map((card, index) => {
        if (index === i)
          return {
            ...card,
            numSeen: card.numSeen + 1,
            numUnseen: card.numUnseen - 1,
          }
        return card
      })
    )
  }

  const handleSeenCardClick = (i: number) => {
    setDeck(
      deck.map((card, index) => {
        if (index === i)
          return {
            ...card,
            numSeen: card.numSeen - 1,
            numUnseen: card.numUnseen + 1,
          }
        return card
      })
    )
  }

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="cardsInHand"
          label="Opp. hand size"
          className={classes.textField}
          value={cards}
          onChange={e => setCards(e.target.value)}
          margin="normal"
        />
      </form>
      <Typography variant="h6" component="h2" style={{ textAlign: 'center' }}>
        {`Unseen Cards ${unseenCount}`}
      </Typography>
      {!!deck &&
        deck.map((card, i) => {
          if (card.numUnseen >= 1) {
            const cardOdds =
              card.numUnseen === 1
                ? odds.one
                : card.numUnseen === 2
                ? odds.two
                : odds.three
            return (
              <CardChip
                num={card.numUnseen}
                name={card.name}
                odds={cardOdds}
                onClick={() => handleUnseenCardClick(i)}
              />
            )
          }
          return null
        })}
      <hr className="mt-2 mb-2" />
      <Typography variant="h6" component="h2" style={{ textAlign: 'center' }}>
        {`Seen Cards ${seenCount}`}
      </Typography>
      {!!deck &&
        deck.map((card, i) => {
          if (card.numSeen >= 1) {
            return (
              <CardChip
                num={card.numSeen}
                name={card.name}
                onClick={() => handleSeenCardClick(i)}
              />
            )
          }
          return null
        })}
      <div style={{ marginTop: 8 }}>
        <Button variant="outlined">Reset Seen Cards (not working yet)</Button>
      </div>
    </>
  )
}
