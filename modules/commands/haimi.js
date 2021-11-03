 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "haimi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "mlem như milo :V",
  commandCategory: "Sữa ngon dành cho trẻ em :V",
  usages: "mông",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/O74F7c7.jpg",
"https://i.imgur.com/DhqjCyM.jpg",
"https://i.imgur.com/DXK02hL.jpg",
"https://i.imgur.com/fpIaLG3.jpg",
"https://i.imgur.com/jO4rGyx.jpg",
"https://i.imgur.com/p1dlwSo.jpg",
"https://i.imgur.com/GAhM1es.jpg",
"https://i.imgur.com/p5qqasY.jpg",
"https://i.imgur.com/fopt6dW.jpg",
"https://i.imgur.com/dQXzOss.jpg",
"https://i.imgur.com/bHYzQky.jpg",
"https://i.imgur.com/6fsv1R4.jpg",
"https://i.imgur.com/f2ANK01.jpg",
"https://i.imgur.com/AXON78o.jpg",
"https://i.imgur.com/G95uLny.jpg",
"https://i.imgur.com/haNImpW.jpg",
"https://i.imgur.com/U5VPNns.jpg",
"https://i.imgur.com/SA4INAI.jpg",
"https://i.imgur.com/BIZtUfm.jpg",
"https://i.imgur.com/MLnN6gP.jpg",
"https://i.imgur.com/lHWgcRq.jpg",
"https://i.imgur.com/8FLSv8k.jpg",
"https://i.imgur.com/p1dlwSo.jpg",
"https://i.imgur.com/Dg4ABXa.jpg",
"https://i.imgur.com/0pliF5t.jpg",
"https://i.imgur.com/SFuSKqx.jpg",
"https://i.imgur.com/uGCNr5G.jpg",
"https://i.imgur.com/HjDqDGv.jpg",
"https://i.imgur.com/wzQ0IDn.jpg",
"https://i.imgur.com/9HxQP4o.jpg",
"https://i.imgur.com/sshwAGz.jpg",
"https://i.imgur.com/SeU1G3C.jpg",
"https://i.imgur.com/gSyxfXJ.jpg",
"https://i.imgur.com/P0oaKjt.jpg",
"https://i.imgur.com/l7271Wh.jpg",
"https://i.imgur.com/Ii6LnmX.jpg",
"https://i.imgur.com/e6AYohS.jpg",
"https://i.imgur.com/9ytdA5z.jpg",
"https://i.imgur.com/pDPdALM.jpg",
"https://i.imgur.com/oTLWMxg.jpg",
"https://i.imgur.com/wTglMgW.jpg",
"https://i.imgur.com/HkyfSJB.jpg",
"https://i.imgur.com/hdx9zVU.jpg",
"https://i.imgur.com/081oK1k.jpg",
"https://i.imgur.com/JlDgyM8.jpg",
"https://i.imgur.com/FDYZ3st.jpg",
"https://i.imgur.com/ZYIY1Qa.jpg",
"https://i.imgur.com/ZzrSZtb.jpg",
"https://i.imgur.com/xUjpp3V.jpg",
"https://i.imgur.com/HT7KyzP.jpg",
"https://i.imgur.com/xUjpp3V.jpg",
"https://i.imgur.com/NjT03oB.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100000) api.sendMessage("Bạn cần 100000 đô để ngắm Hải Mi :vv",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100000})
   var callback = () => api.sendMessage({body:`Hải Mi nè :vv \n» Số dư: -10000 đô «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};
