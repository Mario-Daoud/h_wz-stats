const express = require("express");
const app = express();
require("dotenv").config();

import { login } from "call-of-duty-api";

const ssoToken: string | undefined = process.env.ssoToken;
if (ssoToken) {
  login(ssoToken);
} else {
  console.error("SSO token is missing or undefined.");
}

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => console.log(`Listening on port ${PORT}`));
