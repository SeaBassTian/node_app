exports.index = function (req,res) {
  res.json({success: true, payload: {hearbeat: "alive", version: App.version}});
};
