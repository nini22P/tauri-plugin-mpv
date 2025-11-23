import 'tauri-plugin-mpv-api'

declare module 'tauri-plugin-mpv-api' {
  interface MpvPropertyTypes {
    'file-size'?: number
    'file-format'?: string
  }
}