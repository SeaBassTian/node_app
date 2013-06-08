var VersionSetterMiddleware      = App.require("app/middleware/versionSetter")

module.exports = function(app) {
  // ROOT ROUTES
  app.all('/*', VersionSetterMiddleware())

  var HeartbeatController = App.require("app/controllers/heartbeatController")
  app.get('/heartbeat', HeartbeatController.index)

}
