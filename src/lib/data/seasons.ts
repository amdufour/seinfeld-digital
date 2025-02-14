import { sum } from "d3-array"

export const seasons = [
  { id: 's1', seasonNum: 1, color: '#FDE824', numEpisodes: 5 },
  { id: 's2', seasonNum: 2, color: '#B8CE32', numEpisodes: 12 },
  { id: 's3', seasonNum: 3, color: '#7DBA57', numEpisodes: 23 },
  { id: 's4', seasonNum: 4, color: '#4CB278', numEpisodes: 24 },
  { id: 's5', seasonNum: 5, color: '#1DA388', numEpisodes: 22 },
  { id: 's6', seasonNum: 6, color: '#228A8D', numEpisodes: 24 },
  { id: 's7', seasonNum: 7, color: '#2F708E', numEpisodes: 24 },
  { id: 's8', seasonNum: 8, color: '#39578D', numEpisodes: 22 },
  { id: 's9', seasonNum: 9, color: '#453782', numEpisodes: 24 }
]

export const totalNumEpisodes = sum(seasons, d => d.numEpisodes) as number