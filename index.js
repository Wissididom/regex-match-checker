const core = require('@actions/core');
const github = require('@actions/github');

try {
	const text = core.getInput('text');
	const regex = core.getInput('regex');
	const flags = core.getInput('flags');
	const failOnMatch = core.getInput('fail-on-match');
	const failOnNoMatch = core.getInput('fail-on-no-match');
	const regexObj = new RegExp(regex, flags);
	const match = regexObj.test(text);
	if (match) {
		if (failOnMatch) {
			core.setFailed('Regex matched!');
		}
	} else {
		if (failOnNoMatch) {
			core.setFailed('Regex did not match!');
		}
	}
	core.setOutput('match', match);
} catch (error) {
	core.setFailed(error.message);
}
