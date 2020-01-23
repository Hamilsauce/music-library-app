class NewSong {
  constructor(title, artist, genre, duration, description, audioUrl) {
    this.title = title, 
    this.artist = artist,
    this.genre = genre,
    this.duration = duration,
    this.description = description, 
    this.audioUrl = audioUrl
  }
  validateUrl() {
    //make sure valid url: has necessary parts of address, no spaces, etc  
  } 
  cleanFilename() {
    //mainly replace spaces with '%20' code, also validate file ext
  }
  notifyUser(msgForUser){
    //general message relayer
    //receives a msg as string from whatever method called
    //genetates generic notification container inserts msg
    //inserts msg into notific element, emits
  }
}

document.querySelector('.newSongForm')
  .addEventListener('submit', e => {
    e.preventDefault();
    const msgBox = document.querySelector('.msgBox');
    const titleField = document.querySelector('.titleField');
    
    let msg = !titleField.value ? 'Enter a song title' : titleField.value;
    msgBox.textContent = msg;
    titleField.value = '';   
    setTimeout(() => {
      msgBox.textContent = '';   
      // msg = '';
      
    }, 3000);
  });
