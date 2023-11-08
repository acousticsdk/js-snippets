// add forEach to object prototype
Object.prototype.forEach = function (callback) {
    return Object.keys(this).map(key => callback(key, this[key]))
};
// --------------------------------

// simple debounce
function debounce(func){
    let timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,300,event);
    };
}
window.addEventListener("resize",debounce(function(e){
    console.log('resize finished')
}));
// --------------------------------