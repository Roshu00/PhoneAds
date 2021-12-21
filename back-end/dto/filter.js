const yup = require("yup");

module.exports = yup.object().shape({
  brand: yup.string().default("All"),
  model: yup.string().default("All"),
  lowPrice: yup.string().default("0"),
  highPrice: yup.string().default("100000"),
});
