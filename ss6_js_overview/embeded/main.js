count = 0;
function changeData(color) {
    document.getElementById('content').style.color = color
    if(count > 0) {
        document.getElementById('content').style.background = 'yellow'
    }
    count = count + 1;
}
