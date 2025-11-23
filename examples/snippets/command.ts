import { command, getProperty, setProperty } from 'tauri-plugin-mpv-api'

// Load file
await command('loadfile', ['/path/to/video.mp4'])

// Play/pause
await setProperty('pause', false)
await setProperty('pause', true)

// Seek to position
await command('seek', [30, 'absolute'])
await command('seek', [10, 'relative'])

// Set volume
await setProperty('volume', 80)

// Get property
const duration = await getProperty('duration')
console.log('Duration:', duration)