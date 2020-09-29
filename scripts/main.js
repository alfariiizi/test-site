let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/mozilla-logo.png' ) {
        myImage.setAttribute( 'src', 'images/twitter-icon.png' );
    } else {
        myImage.setAttribute( 'src', 'images/mozilla-logo.png' );
    }
}