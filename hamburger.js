function menuToggle(){
    var nbar = document.getElementById('topnav');
    if(nbar.className === 'top'){
        nbar.className += ' expand';
    }
    else{
        nbar.className = 'top';
    }
}
