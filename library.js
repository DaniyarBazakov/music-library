const library = {
  tracks: {
    t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003"},
    t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952"}
  },
     
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  },
     
  printPlaylists: function() {
    for (let playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      const trackCount = playlist.tracks.length;
      console.log(`${playlistId}: ${playlist.name} - ${trackCount} tracks`);
    }
  },
     
  printTracks: function() {
    for (let trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
     
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
     
    if (!playlist) {
      console.log(`Playlist with id ${playlistId} not found.`);
      return;
    }
     
    const trackIds = playlist.tracks;
    const trackCount = trackIds.length;
    console.log(`${playlistId}: ${playlist.name} - ${trackCount} tracks`);
     
    trackIds.forEach(trackId => {
      const track = this.tracks[trackId];
      if (track) {
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      }
    });
  },
     
  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    if (!playlist) {
      console.log(`Playlist with id ${playlistId} not found.`);
      return;
    }
    playlist.tracks.push(trackId);
  },
     
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
     
  addTrack: function(name, artist, album) {
    const id = this.generateUid();
    const newTrack = { id: id, name: name, artist: artist, album: album };
    this.tracks[id] = newTrack;
  },
     
  addPlaylist: function(name) {
    const id = this.generateUid();
    const newPlaylist = { id: id, name: name, tracks: [] };
    this.playlists[id] = newPlaylist;
  },
     
  printSearchResults: function(query) {
    query = query.toLowerCase();
    for (let trackId in this.tracks) {
      const track = this.tracks[trackId];
      if (track.name.toLowerCase().includes(query) ||
               track.artist.toLowerCase().includes(query) ||
               track.album.toLowerCase().includes(query)) {
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  }
};
     

library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01', 'p02');
console.log(library.playlists['p02']);
library.addTrack('So Sorry', 'Drake', 'Sorry Kendrik');
console.log(library.tracks);
library.addPlaylist('Running');
console.log(library.playlists);
library.printSearchResults('Dempsey');
     