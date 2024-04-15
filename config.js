//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/ZkBjWK2.jpg";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "2348039607375";
global.owner = process.env.OWNER_NUMBER || "2348039607375";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUR0aXREMnFJWDE5RzN5T1pGQkRjUlM1Sm91VEp5bGRkNkF6eXN3aEdVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWpEdS92TnBkR0VBTEQ4NzZUZzcrL0hVTFRJSU56bWhoRm43WmtVSzVUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT2JtOGY3U1dwTHVMdlhOMjRVSWZXRUVBSHlOc3ZHN1MrMkZkVnlZUjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQmxWV3l5Q2t3c2p5UkVNd0RKbWovVVJCN1c0RVgrNWZIL3RwU0wxOEgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklCa2VKZUJpT1F4R2ZsSXRZdDk3bmxZS2dwK3RsS0pHUEF4VzBEUVl3SG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims5Z2Fzc1FDWVVhcS9Xb25NUUJaQWhaMFZIVTVJc2VEVDB0OXZCTjdPMTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1Ea2psOVN0ZUR5b2w3YjdQT3lTUEErcnp1VGpJdS9GVUZTRWtNc3RXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVJSnlqMTlST2MvUkpNUHV0S2RhTmNkL0YwM21FbW5rZ3JYbHlGRzRRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZXa041andKZ2FaZmZqTUE3ejlXcHgyU3oyNVo5dkd5RzJrR3dUNjA0RmtSWFhvTU5vS3FSaUo5Wk53cmVwR2hsbzRSTU9xQW1pMVBGOEtrZ3UwTUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJjbGpreEFuTlRqcnE3QUFqOFF0YVZ4Z2U1RDArNXNuU2EvV2J2TThTU0ZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMjc4NjIxMTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjY2NTZFRkU5MEU2RjZENjhCOTZFNzQ1MjBFM0FBM0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxMjg2MzA0NX1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaU41SUZBTlNTdWFiZW92aTdleVRadyIsInBob25lSWQiOiJmZWIxYzExMC0yYmRiLTQ3YzItOWFjMS1hMzk0ZTRlMmU1NjkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURyVHllSWlxTmFuUTY0aWlJaG5lTHVtYWU4PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4M1lFSXl2REdha3Z6U2FmVDkzbExWcGxnWlU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNkV1WWNFRUwvdTRMQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCWDBwQnIvZjh1cUl0TUN1Zmtwak5PWXRIbkdiOGFUdDZ4U3p0WFlya1JJPSIsImFjY291bnRTaWduYXR1cmUiOiJ0STZGdmJya25VK21CMk1FaWsvV041MFMxRWJKdTdodWJibmtPeDRGQ3d1dGZvRkFFQ2cxSE04WTR4dUFPajhMZEI2czM0STdtajJXVkpoaTZiRU1DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTExHbGx0emFBVGUwV1pRZDAvR1N0a0NOMjdDTkJWejFPZGZWc2Y2ZmpBWHpSdTJrNGh4QzJFeDNIVjNBMEt1anpkNWlidktpVk4rTWJPWGJzQnZYQmc9PSJ9LCJtZSI6eyJpZCI6IjIzNDkwMjc4NjIxMTY6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBc3Ryb3BlZGEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyNzg2MjExNjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFWOUtRYS8zL0xxaUxUQXJuNUtZelRtTFI1eG0vR2s3ZXNVczdWMks1RVMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTI4NjMwNDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHJVIn0=";

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴀsᴛᴀ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ᴀsᴛᴀ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
