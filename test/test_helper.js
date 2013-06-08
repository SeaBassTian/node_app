process.env.NODE_ENV = "test"
require("../config/application")

global.assert = require("assert")

// You can put here any functions/properties that you need to have visible to all of 
// your tests.
App.Test = {
}
