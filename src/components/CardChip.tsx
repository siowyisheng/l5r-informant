import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    veryLikely: {
      backgroundColor: '#ea9999',
    },
    likely: {
      backgroundColor: '#f9cb9c',
    },
    probable: {
      backgroundColor: '#ffe599',
    },
    improbable: {
      backgroundColor: '#b6d7a8',
    },
    unlikely: {
      backgroundColor: '#b4d2ff',
    },
    veryUnlikely: {
      backgroundColor: '#ddd',
    },
  })
)

export const CardChip: React.FC<{
  num: number
  name: string
  odds?: string
  onClick: () => void
}> = ({ num, name, odds, onClick }) => {
  const classes = useStyles()
  const p = !!odds && parseInt(odds, 10)
  const prob = !odds
    ? null
    : p > 83
    ? 'veryLikely'
    : p > 66
    ? 'likely'
    : p > 49
    ? 'probable'
    : p > 32
    ? 'improbable'
    : p > 16
    ? 'unlikely'
    : 'veryUnlikely'
  return (
    <Chip
      size="small"
      avatar={
        !!odds ? (
          <Avatar
            style={{ border: '1px solid #fff' }}
            className={classes[prob!]}
          >
            {odds}
          </Avatar>
        ) : (
          undefined
        )
      }
      label={name + ' ' + '•'.repeat(num)}
      onClick={() => onClick()}
      className={classes[prob!]}
      style={{ margin: '4px' }}
      deleteIcon={<div>hahaha</div>}
    />
  )
}
