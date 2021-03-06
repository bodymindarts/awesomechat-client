'use strict';

var MessageFactory = require('../../src/domain/MessageFactory');

describe('MessageFactory', function() {

  it('can return a pending message', function() {

    var timeStamp = new Date();
    var message = MessageFactory.pending('userName', 'text');

    expect(message.id).to.equal(message.score + '-userName');
    expect(message.user).to.equal('userName');
    expect(message.text).to.equal('text');
    expect(message.pending).to.equal(true);
    expect(message.timeStamp).to.equal(timeStamp.toISOString());
  });
});
