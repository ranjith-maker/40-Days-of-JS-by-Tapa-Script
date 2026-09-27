


// DAY -37 JS Debugging Notes

/*

1. What are Web APIs?

2. How Web APIs Work?

3. Core Web APIs
    a. DOM
    b. Events
    c. Timer
    d. Fetch
    e. Console
    f. Copy
    g. Storage
    h. Geolocation
    i. Notification
    j. EyeDropper
    ... and 100s more.
    Navigator is a object ginven by Browser it has multiple methids to use
4. An Open Source Project to Contribute

*/

/**
JS alone may not be sufficient to do all of the functionalities
that we as a user 
FOr ex - camera, browser storage, user location, notifi to browser,
broadcasting a message, sharing screen
JS + browser giving 

1. What are Web APIs?
           A Web API in JavaScript is a browser-provided interface that lets your 
JavaScript code interact with  features outside the core language — 
like the DOM, network, clipboard, camera, etc.
Features that are not directly available in JS, 
DOM is an API given by browser using JD we can access and work on it



2. How Web APIs Work?
JS code will wont be hold when async task goes on bg
CALL stack example as Event loop

Copy 

const copyBtn = document.getElementById('copybtn')
const statusMsg = document.getElementById('statusMsg')
const textarea= document.querySelector('textarea')

copyBtn.addEventListener('click', async()=>{

 try {
   if(!navigator.clipboard){
console.warn('Coping is not available in your browser')
return
   }
  const text = textarea.value
  await navigator.clipboard.writeText(text)
  statusMsg.textContent = 'Text is copied'
  statusMsg.style.color = 'green'
 } catch (error) {
  statusMsg.textContent = 'Failed to copy'
  statusMsg.style.color = 'red'
 }
})



Local Storage  toggle button light dark
Session storage on  textarea input is savced

GeoLocation


const locationbtn =document.getElementById('locationbtn')
const statusMsg = document.getElementById('statusMsg')


locationbtn.addEventListener('click',()=>{

if(!navigator.geolocation){
  statusMsg.textContent = 'Geolocation is not supported by your browser'
  return
}

statusMsg.textContent = 'Locating.....'

navigator.geolocation.getCurrentPosition(

  (position) =>{
    const { latitude, longitude } = position.coords
    statusMsg.innerHTML = `
    Latitude : ${latitude.toFixed(5)} <br/>
    Longitude : ${longitude.toFixed(5)}
    `
  },
  (error)=>{
    switch(error.code){
      case error.PERMISSION_DENIED:
          statusMsg.textContent = ' User denied the request.';
          break;

      case error.POSITION_UNAVAILABLE:
        statusMsg.textContent ='Location information unavailable.';
        break;
        
      case error.TIMEOUT:
        statusMsg.textContent ='The request timed out.';
        break;
      default: 
        statusMsg.textContent ='An unknown error occurred.';    
}})})


const notifyBtn = document.getElementById('notifyBtn');
const statusMsg = document.getElementById('statusMsg');

notifyBtn.addEventListener('click', async () => {
  if (!('Notification' in window)) {
    statusMsg.textContent = 'Notifications not supported in this browser.';
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    new Notification('Hello from TapasScript!', {
      body: 'This is your notification demo!'
    });
    statusMsg.textContent = '✅ Notification sent!';
  } else if (permission === 'denied') {
    statusMsg.textContent = '❌ Notification permission denied.';
  } else {
    statusMsg.textContent = 'Notification permission not decided.';
  }
});


 */

























