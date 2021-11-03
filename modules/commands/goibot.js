 const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Dùng /callad [text] để báo lỗi cho adm hoặc report ai đó spam kèm id (/uid @tag) của họ","Chào bạn tôi là bot của anh Phatcutee","Gọi tao có việc gì?","Yêu em <3","Gọi gọi cc","Sủa lẹ?","Yêu em❤","Đéooo","Đjt hônggg😼","Yêu em đi, phí thế :<<","Muốn cc gì? Lên giường nói chuyện!","Nếu là gái, ib cho Bot xin ảnh để thêm zo lệnh 'girl' nha!","Đang làm gì dạ?","Yêu nhau hông bae❤","Yêu em đi, em cho kẹo!","Dạaa bae","djt moe moay","Sử dụng /adm để xemn thông tin admin!"];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "bot lon") || 
  (event.body.toLowerCase() == "phát ngu") ||
  (event.body.toLowerCase() == "phát lồn") ||  
  (event.body.toLowerCase() == "phát lon") || 
  (event.body.toLowerCase() == "địt mẹ bot") || 
  (event.body.toLowerCase() == "bot óc chó")|| (event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "bot súc vật")) {
    data.reason = reason || null;
    data.dateAdded = time;
    global.data.threadBanned.set(idgr, { reason: data.reason, dateAdded: data.dateAdded });
    return api.sendMessage(`❌Nhóm ${idgr} của bạn đã bị ban, sẽ không thể sử dụng bot!\n❌Lý do: Chửi bot\n✔️Vui lòng liên hệ admin để xem xét lại. `, threadID);
  };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }