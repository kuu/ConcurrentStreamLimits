var sha256 = require('tiny-sha256');

function serialize(params, delimiter) {
  return Object.keys(params).sort(function (a, b) {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      return 0;
    } else {
      return 1;
    }
  }).map(function (key) {
    return key + '=' + params[key];
  }).join(delimiter);
}

exports.get = function(embedCode, accountId) {

  console.log('player-token.get(' + embedCode + ', ' + accountId + ')');

  var apiKey = 'BtbmUyOlamRiH-S0S-iUeNvf_ghr.1Vrkx',
      secret = 'E6xoX4GJ5tnW3ysIy5biIXgXZuP6NVwQWrlmIOW_',
      pcode = 'BtbmUyOlamRiH-S0S-iUeNvf_ghr',
      path = '/sas/embed_token/' + pcode + '/' + embedCode,
      expires = Date.now() + 86400000,
      params = {
        api_key: apiKey,
        expires: expires,
        account_id: accountId
      },
      method = 'GET', hashStr, signature, token;

  hashStr = sha256(secret + method + path + serialize(params, ''));
  signature = new Buffer(hashStr, 'hex').toString('base64');
  // Remove any trailing '=' sign
  signature = signature.replace(/=+$/, '');

  token = [
    'http://player.ooyala.com' + path,
    [
      serialize(params, '&'),
      ['signature', encodeURIComponent(signature)].join('=')
    ].join('&').replace(/^&+/, '')
  ].join('?');

  console.log('token=', token);
  return token;
};
