import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#f8f8ff',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo.png',
    fullDecal: './logo.png'
})

export default state
