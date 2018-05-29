const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // store res in variable
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);
    // assert from match
    // assert text match
    expect(message).toMatchObject({from, text});
    // assert createdAt is number
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Bob';
    var latitude = 123;
    var longitude = 456;
    var url = 'https://www.google.com/maps?q=123,456';
    var message = generateLocationMessage(from, latitude, longitude);
    
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});