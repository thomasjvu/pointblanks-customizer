import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
    const snap = useSnapshot(state)

  return (
    <div className="absolute left-full ml-3">
        <SketchPicker 
                color={snap.color}
                disableAlpha
                presetColors={[
                    "#f8f8ff",
                    "rgb(190, 180, 143)",
                    "#ffbb33",
                    "#ff0000",
                    "#44ff88",
                    "#000000"
                ]}
                onChange={(color) => state.color = color.hex}
        />
    </div>
  )
}

export default ColorPicker
