/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { TextField } from '@material-ui/core'

const CardsInput: React.FC<{
  value: string
  onChange: (val: string) => void
}> = ({ value, onChange }) => {
  return (
    <TextField
      type="number"
      css={{ width: 100 }}
      label="Their hand size"
      inputProps={{
        min: 0,
        max: 50,
        style: { textAlign: 'center', fontSize: '2rem' },
      }}
      value={value}
      onChange={e => onChange(e.target.value)}
      margin="normal"
    />
  )
}
export default CardsInput
