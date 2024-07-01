const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23409033969157";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_19_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIml3V1BLU3ZlbWZ6R1lXRmdiM2hoL1NGZmhGZWM1eXVuTldlYnJTQ0pXR0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlSZkNMeVZ6UWZPZ0R6NGgwQTNEeHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODdmOGFiNTgtOThiOS00YzJkLThmNWMtZDhlOWMyZGMyY2FhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAxMTEsXG4gICAgICAyMTAsXG4gICAgICAzNSxcbiAgICAgIDY5LFxuICAgICAgMTEsXG4gICAgICA0OSxcbiAgICAgIDE2OSxcbiAgICAgIDUzLFxuICAgICAgMTI1LFxuICAgICAgMjEyLFxuICAgICAgMTI0LFxuICAgICAgNTksXG4gICAgICAyNDMsXG4gICAgICAxODksXG4gICAgICAxNTAsXG4gICAgICAyMzEsXG4gICAgICAxMjcsXG4gICAgICA1NCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICA2MSxcbiAgICAgIDIyOCxcbiAgICAgIDEzMyxcbiAgICAgIDEyLFxuICAgICAgMTA1LFxuICAgICAgMjQ2LFxuICAgICAgOTIsXG4gICAgICAxNDIsXG4gICAgICAxODUsXG4gICAgICAyMTYsXG4gICAgICAxOSxcbiAgICAgIDUyLFxuICAgICAgODAsXG4gICAgICAyMDAsXG4gICAgICAxMTcsXG4gICAgICAyMjEsXG4gICAgICAzMCxcbiAgICAgIDEzLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFYWE1LVDNEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMzOTY5MTU3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1OTk3OTA2ODM3NzA5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNpNmEwQ0VNUzlpclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqUWVUWm5WZjZlVHBJV01UZnJwSTI1OXUvNm42eW05OE5qZ29BNzhkV0dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxQTStaSW5FU2sycEh2eXZjSHdXRUl3bEFlRHhsSk9CWE1pdXkrSW8reEpMYWhyS2E4SVpnb1U3SjVONkpXc3dUU0tWeFR4aGdDMFkvcmhHdnFSNUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlgzVVN5and0ZzBHcFBpWkdua0RxQTJXRTlIUmRhcmU3c0VaNEJKOWVUZ1IvVE85SWtyWHBqWEl5Sy9UQnowVC84ZXBjajArM0xtOXByc1p3UGhyTmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzM5NjkxNTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTgzNjM2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
