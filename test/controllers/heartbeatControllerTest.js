require("../test_helper");

var request = require("supertest");

describe("HeartbeatController", function() {
  it("gets the heartbeat", function(done) {
    request(App.app)
      .get("/heartbeat")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
