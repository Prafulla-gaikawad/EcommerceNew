const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "Aez_zW_WcKgEJYoxsZ3KTqIow8NwM0Bv0ekCJsFVmJgZZKscOm-wojFEPIJFX639_G70VKcBldhi_YgL",
  client_secret:
    "EBmpyVs5_Jn9jdp6ycoT6QF9G1aJU24sAOIyK6i1IyPhHXufhu_POSsx6GgLf-rB7ZwMGwoMZdGyY4ib",
});

module.exports = paypal;
