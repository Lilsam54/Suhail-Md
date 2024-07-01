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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23409162208200
  ";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_59_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDAsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjVW44azN1R1l3NWJnazdWYUJPU1drNHhrZEc0bkhLU2Q2MHRNYTVIMzlJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjIyMDgyMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZEQjQ1MjM0QTc3REQ4RjZDMDY1OUUyN0YzRjJBRDlDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg0MjM2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjIyMDgyMDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRFREQ3M0FBQUYyNzZGMDE5NzJEMkYxQkNEOUM0OTUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg0MjM2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6TUJhV0s4TlEtQzdBY1U4OEVCXzlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlMDJkYWJmLTM2NzItNDI0ZC04YjNlLTQyZWVhYmFkZjczOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxNzEsXG4gICAgICAxNjQsXG4gICAgICA0MixcbiAgICAgIDIxNyxcbiAgICAgIDE2MSxcbiAgICAgIDE3NCxcbiAgICAgIDE3OCxcbiAgICAgIDIzNyxcbiAgICAgIDE4NSxcbiAgICAgIDgzLFxuICAgICAgMjMxLFxuICAgICAgMTAzLFxuICAgICAgMTQ1LFxuICAgICAgMTU5LFxuICAgICAgMTE3LFxuICAgICAgMTAwLFxuICAgICAgNzQsXG4gICAgICAyMzAsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgNTIsXG4gICAgICAyMTMsXG4gICAgICA1MSxcbiAgICAgIDAsXG4gICAgICAxOTQsXG4gICAgICA1LFxuICAgICAgMTY3LFxuICAgICAgOTEsXG4gICAgICAyMDMsXG4gICAgICA1MixcbiAgICAgIDE1NSxcbiAgICAgIDk2LFxuICAgICAgMTY0LFxuICAgICAgNzksXG4gICAgICA1MixcbiAgICAgIDE2MCxcbiAgICAgIDE1NixcbiAgICAgIDEwMCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhUUTVGSkRLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYyMjA4MjAwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0ODEwMzM2NjA3NDQ3MTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1K2pyNEhFTFBzaXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEV4N3R0Ri9HK29JYW4rQnVtZ3NGN1hsenBYbXdIaEtURUsrVmZxY2syaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNR1I2Mm1BbVhtNFNVZllnc3RRMWE0ODBZeUpJenU3Y0dYaUR3N2pUdDJ1NDBxK3lzMnFVUDBTOHFOOWZuMGhYOURjVE95YWVQWnpBeHpwTW5xSldEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXTGxnQnBkU1IzcjcxT2tteXNwbUxCTXRES3VzbWhkOVlOVEZXYisyNHVyT3dLZTRwaU13UWFBa2YyZFpxZXN4NG11MGpkZTh6QUJ5b0hDbTZRT1ZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYyMjA4MjAwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODQyMzU4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
