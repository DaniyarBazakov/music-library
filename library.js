const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  const playlists = library.playlists;
  for (let playlistId in playlists) {
    const playlist = playlists[playlistId];
    const name = playlist.name;
    const trackCount = playlist.tracks.length;
    console.log(`${playlistId}: ${name} - ${trackCount} tracks`);
  }
};
     
//printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  const tracks = library.tracks;
  for (let tracksId in tracks) {
    const track = tracks[tracksId];
    const name = track.name;
    const artist = track.artist;
    const album = track.album;
    console.log(`${tracksId}: ${name} by ${artist} (${album})`);
  }
};

//printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];

  if (!playlist) {
    console.log(`Playlist with id ${playlistId} not found.`);
    return;
  }

  const playlistName = playlist.name;
  const trackIds = playlist.tracks;
  const trackCount = trackIds.length;

  console.log(`${playlistId}: ${playlistName} - ${trackCount} tracks`);

  trackIds.forEach(trackId => {
    const track = library.tracks[trackId];
    if (track) {
      const { name, artist, album } = track;
      console.log(`${trackId}: ${name} by ${artist} (${album})`);
    }
  });
};
     
// printPlaylist('p01');


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const track = library.tracks[trackId];
  const playlist = library.playlists[playlistId];
  playlist.tracks.push(trackId);
};
     
// addTrackToPlaylist('t01', 'p02');
// console.log(library.playlists['p02']);


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const id = generateUid();
  const newTrack = {
    id: id,
    name: name,
    artist: artist,
    album: album
  };
  library.tracks[id] = newTrack;
};

// addTrack('So Sorry', 'Drake', 'Sorry Kendrik');
// console.log(library.tracks);

// adds a playlist to the library
const addPlaylist = function(name) {
  const id = generateUid();
  const newPlaylist = {
    id: id,
    name: name,
    tracks: []
  };
  library.playlists[id] = newPlaylist;
};

// addPlaylist('Running');
// console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  query = query.toLowerCase();


  for (let trackId in library.tracks) {
    const track = library.tracks[trackId];
    const { name, artist, album } = track;

    if (name.toLowerCase().search(query) !== -1 ||
       artist.toLowerCase().search(query) !== -1 ||
       album.toLowerCase().search(query) !== -1) {
      console.log(`${trackId}: ${name} by ${artist} (${album})`);
    }
  }
};
     
// printSearchResults('Dempsey');