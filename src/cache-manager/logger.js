'use strict';
// Connects to the Server Hub DONE
// Responds to 2 events
// ‘file-saved’
// On this event, execute a console.log() with the event payload
// ‘file-error’
// On this event, execute a console.error() with the event payload

// RESPONDER APPLICATION
//----------------------------------------------------

const net = require('net');
const client = new net.Socket();
const events = require('../events.js');

client.connect(3001, 'localhost', () => {});

client.on('data', (buffer) => {
  let data = buffer.toString().trim();
  data = JSON.parse(data);

  if(data.name === 'saved'){
    handleFileSave(events.emit);
  } else if (data.name === 'error'){
    handleFileError(events.emit);
  }


});

let handleFileSave = (data) => {
  console.log(data.message);
};

let handleFileError = (data) => {
  console.log(data.message);
};


events.on('handleFileSave', handleFileSave);
events.on('handleFileError', handleFileError);

