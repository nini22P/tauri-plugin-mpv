import { observeProperties } from 'tauri-plugin-mpv-api'

const OBSERVED_PROPERTIES = ['pause', 'time-pos', 'duration', 'filename'] as const

// Observe properties
const unlisten = await observeProperties(
  OBSERVED_PROPERTIES,
  ({ name, data }) => {
    switch (name) {
      case 'pause':
        console.log('Playback paused state:', data)
        break
      case 'time-pos':
        console.log('Current time position:', data)
        break
      case 'duration':
        console.log('Duration:', data)
        break
      case 'filename':
        console.log('Current playing file:', data)
        break
    }
  })

// Unlisten when no longer needed
unlisten()