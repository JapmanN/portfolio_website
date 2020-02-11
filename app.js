// ==========================
// REQUIRE NECESSARY PACKAGES
// ==========================
const express = require("express"),
app           = express();

// =================
// APPLICATION SETUP
// =================
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ==================
// APPLICATION ROUTES
// ==================
app.get("/", (req, res) => {
    res.render("home");
});

app.get("*", function(req, res) {
    res.send("Sorry, this page does not exist!");
});

// =============
// SERVER STARUP
// =============
app.listen(3000, function() {
    console.log("server is running...");
});