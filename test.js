const pixie = require('pixie');
const date = require('./');
const test = require('tape');

test('pixie render should equal date string', t => {
  const now = new Date();
  const format = '{{ddd MMM DD YYYY}}';
  const render = pixie.render(format, null, {engines: [date(now)]});
  t.equal(render, now.toDateString());
  t.end();
});
