// Get DOM elements
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const eventLog = document.getElementById('eventLog');
const clearLogBtn = document.getElementById('clearLog');



// Function to log events
function logEvent(elementName, phase, event) {
    
    
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${phase.toLowerCase()}`;
    
    logEntry.innerHTML = `
        <strong>${elementName}</strong> — 
        <span class="phase ${phase.toLowerCase()}">${phase}</span>
    `;
    
    eventLog.insertBefore(logEntry, eventLog.firstChild);
}

//capturing phase
grandparent.addEventListener('click', (e) => {
    logEvent('Grandparent', 'Capturing', e);
}, true);

parent.addEventListener('click', (e) => {
    logEvent('Parent', 'Capturing', e);
}, true);

child.addEventListener('click', (e) => {
    logEvent('Child', 'Capturing', e);
}, true);

// bubbling phase
child.addEventListener('click', (e) => {
    logEvent('Child', 'Bubbling', e);
}, false);

parent.addEventListener('click', (e) => {
    logEvent('Parent', 'Bubbling', e);
}, false);

grandparent.addEventListener('click', (e) => {
    logEvent('Grandparent', 'Bubbling', e);
}, false);

// Clear log functionality
clearLogBtn.addEventListener('click', () => {
    eventLog.innerHTML = '';
    logCounter = 0;
});

