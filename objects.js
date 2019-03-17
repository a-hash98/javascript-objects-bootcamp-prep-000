var playlist = {}
playlist.assign({Lady Gaga: Born This Way})

function updatePlaylist(playlist, artist, song){
  playlist.assign({playlist},{artist : song})
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist.artist
  return playlist
}
