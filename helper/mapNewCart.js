const crypto = require('crypto');


module.exports = (cart) => {
  if (!cart || cart.length < 1) {
    return;
  }
  console.log('enter mapper');
  const timestamp = new Date().getTime();
  const uuid = crypto.randomBytes(8).toString('hex');
  const data = {
    pk: cart.pk || uuid,
    sk: cart.sk || uuid,
    created: timestamp,
    updated: timestamp,
  };
  console.log(`data ${data}`);
  return data;
};
