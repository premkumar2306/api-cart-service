const Razorpay = require("razorpay");
var axios = require("axios");

var instance = new Razorpay({
  key_id: "rzp_test_yOlsKIxAyk34NX",
  key_secret: "NEKWQvPs9ubFCeaNQTD3jLWX",
});

const getallOrders = function () {
  return new Promise((resolve, reject) => {
    instance.orders
      .all()
      .then((response) => {
        // handle success
        resolve(response);
      })
      .catch((error) => {
        // handle error
        reject(error);
      });
  });
};

const createOrder = function () {
  return new Promise((resolve, reject) => {
    const amount = 50000;
    const currency = "INR";
    const receipt = "12312312";
    const notes = {
      key1: "value3",
      key2: "value2",
    };
    const products = [
      {
        type: "mutual_fund",
        plan: "GD",
        folio: "9104927822",
        amount: "1400",
        option: "G",
        scheme: "LT",
        receipt: "77407",
      },
      {
        type: "mutual_fund",
        plan: "SS",
        folio: "414117335676",
        amount: "2400",
        option: "G",
        scheme: "BP",
        receipt: "77407",
      },
    ];
    var config = {
      method: "post",
      url: "https://api.razorpay.com/v1/orders",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic cnpwX3Rlc3RfeU9sc0tJeEF5azM0Tlg6TkVLV1F2UHM5dWJGQ2VhTlFURDNqTFdY",
      },
      data: JSON.stringify({
        amount,
        currency,
        receipt,
        notes,
        products,
      }),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

const process = async function () {
    const newOrder = await createOrder();
    console.log(newOrder);
  const allOrders = await getallOrders();
  console.log(allOrders);
};
process();
