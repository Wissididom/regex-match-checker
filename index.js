const core = require("@actions/core");
const github = require("@actions/github");

function convertYamlBoolToJsBool(value) {
  switch (value.toLowerCase()) {
    case "true":
    case "yes":
    case "on":
      return true;
    case "false":
    case "no":
    case "off":
      return false;
  }
  return undefined;
}

try {
  const text = core.getInput("text");
  const regex = core.getInput("regex");
  const flags = core.getInput("flags");
  const failOnMatch = convertYamlBoolToJsBool(core.getInput("fail-on-match"));
  const failOnNoMatch = convertYamlBoolToJsBool(
    core.getInput("fail-on-no-match"),
  );
  const regexObj = new RegExp(regex, flags);
  const match = regexObj.test(text);
  if (match) {
    if (failOnMatch) {
      core.setFailed("Regex matched!");
    }
  } else {
    if (failOnNoMatch) {
      core.setFailed("Regex did not match!");
    }
  }
  core.setOutput("match", match);
} catch (error) {
  core.setFailed(error.message);
}
