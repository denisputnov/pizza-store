import React, { useState } from 'react'
import classes from './Controls.module.css'

interface IControlsProps {
  itemID: string
  onChange: React.ChangeEventHandler
  maxValue: number | string
  minValue: number | string
  name: string
  units: string
  secondDefaultChecked: boolean
}

function Controls({itemID, onChange, maxValue, minValue, name, units, secondDefaultChecked }: IControlsProps) {
  const [isMoved, setIsMoved] = useState<boolean>(secondDefaultChecked)

  const onCheckChange = (e: any) => {
    onChange(e)
    setIsMoved(!isMoved)
  }
  
  return (
    <div className={classes.ControlsLine}>
      <label>
        <input type="radio" name={`${itemID}-${name}`} value={minValue} defaultChecked={!secondDefaultChecked} onChange={onCheckChange} />
        {minValue + units}
      </label>
      <label>
        <input type="radio" name={`${itemID}-${name}`} value={maxValue} defaultChecked={secondDefaultChecked} onChange={onCheckChange} />
        {maxValue + units}
      </label>
      <span className={[classes.ControlsPlank, isMoved ? classes.ControlsPlankMoved : ''].join(' ')} />
    </div>
  )
}

export default Controls
