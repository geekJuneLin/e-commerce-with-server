const express = require("express");
const stripe = require("stripe")("sk_test_NZvzx5VTXzif5SZpHoR6sp4H00HtG0KAId");
const router = express.Router();

const handleCheckout = async (req, res, next) => {
  var status;
  try {
    const { price, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create({
      amount: price * 100,
      currency: "nzd",
      customer: customer.id,
      receipt_email: token.email,
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          country: token.card.address_country,
          postal_code: token.card.address_zip,
        },
      },
    });
    console.log("success");
    status = "success";
  } catch (err) {
    console.log("err: " + err.message);
    status = "error";
  }
  res.json(status);
};

router.route("/").post(handleCheckout);

module.exports = router;
