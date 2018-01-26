
let old_Log = console.log;
let log = document.querySelector('#log');
console.log = function(msg){
    old_Log(msg);

    let node = document.createElement('code');
    node.textContent = JSON.stringify(msg); 
    log.appendChild(node);
}

window.onerror = function(message, url, linenumber) {
    console.log("JavaScript error: " + message + " on line " + 
                linenumber + " for " + url);
}
