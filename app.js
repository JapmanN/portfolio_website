// ==========================
// REQUIRE NECESSARY PACKAGES
// ==========================
const express = require("express"),
app           = express();

// =================
// APP CONFIGURATION
// =================
app.set("view engine", "ejs");

// ==================
// APPLICATION ROUTES
// ==================
app.get("/", (req, res) => {
    res.render("home");
});

// =============
// SERVER STARUP
// =============
app.listen(3000, function() {
    console.log("server is running...");
});