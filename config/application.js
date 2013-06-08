var env         = process.env.NODE_ENV || 'development'
  , packageJson = require("../package.json")
  , express     = require("express")
  , fs          = require("fs")

console.log("Loading App in " + env + " mode.")

global.App = {
  app:     express()
, config:  require("./config")[env]
, version: packageJson.version
, port:    process.env.PORT || 3000
, root:    process.cwd()
, require: function(path) {
    return require(this.root + "/" + path)
  }
, env: env
, start: function() {
    if (!this.started) {
      this.started = true
      this.app.listen(this.port)
      console.log("Running App Version " + App.version + " on port " + App.port + " in " + App.env + " mode")
    }
  }
, shutdown: function() {
    console.log("Manually shutting down App.")
    if (App.DB) {
      App.DB.shutdown()
    }
  }
}

if (!App.config) {
  console.log("ERROR: No config specified for " + env + " environment.")
  process.exit(1)
}

// Middlewarez
if (App.env != "test") {
  App.app.use(express.logger())
}
App.app.use(App.app.router)

// Bootstrap teh [sic] routes
App.require("config/routes")(App.app)

App.require("config/database.js")


