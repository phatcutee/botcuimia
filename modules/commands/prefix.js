const fs = require("fs");
module.exports.config = {
name: "diemdanhv2",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("điểm")==0 || (event.body.indexOf("Điểm")==0)) {
		var msg = {
				body: "có"
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}