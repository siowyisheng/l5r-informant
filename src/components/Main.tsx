import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { DeckView } from './DeckView'
import { OddsView } from './OddsView'
import {
  makeStyles,
  Theme,
  useTheme,
  createStyles,
} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import SwipeableViews from 'react-swipeable-views'

export type Deck = Array<{ name: string; numSeen: number; numUnseen: number }>

interface TabContainerProps {
  children?: React.ReactNode
  dir?: string
}

function TabContainer({ children, dir }: TabContainerProps) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 400,
    },
  })
)

const SampleDeck = [
  {
    name: 'Embrace the Void',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Fine Katana',
    numSeen: 0,
    numUnseen: 2,
  },
  {
    name: 'Ornate Fan',
    numSeen: 0,
    numUnseen: 2,
  },
  {
    name: 'Cloud the Mind',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Ancient Master',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Shrine Maiden',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Banzai',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Censure',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Court Games',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Let Go',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Supernatural Storm',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Against the Waves',
    numSeen: 0,
    numUnseen: 3,
  },
  {
    name: 'Clarity of Purpose',
    numSeen: 0,
    numUnseen: 2,
  },
  {
    name: 'Display of Power',
    numSeen: 0,
    numUnseen: 2,
  },
  {
    name: 'Consumed by Five Fires',
    numSeen: 0,
    numUnseen: 2,
  },
]

export default function FullWidthTabs() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [value, setValue] = useState(0)
  const [deck, setDeck] = useState(SampleDeck)

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  function handleChangeIndex(index: number) {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0" />
      </Helmet>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Odds" />
          <Tab label="Opponent's Deck" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <OddsView deck={deck} setDeck={setDeck} />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <DeckView deck={deck} setDeck={setDeck} />
        </TabContainer>
      </SwipeableViews>
    </div>
  )
}
