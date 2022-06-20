//═══════[ THANKS 2K SUBSCRIBER ]════════\\
/*
• SCRIPT FULL NO ENC
• APIKEY PREMIUM
*/
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //Apikey Premium
}
global.Prefix = 'Multi'
global.meki = '94775792013'
global.ownerNumber = '94775792013'
global.botname = 'V I M U K T H I - ＭＤ' 
global.ownername = '𝙸 𝙰𝚖 ⱽⁱᴹᵘᴷᵗᴴⁱ'
global.owner = ['94775792013'] 
global.pemilik = ['94775792013'] 
global.premium = ['94775792013'] 
global.pengguna = 'ＶｉＭｕＫｔＨｉ'
global.botnma = 'V I M U K T H I - ＭＤ' 
global.ownernma = '𝙸 𝙰𝚖 ＶｉＭｕＫｔＨｉ'
global.packname = '✨ ＶｉＭｕＫｔＨｉ ✨' 
global.author = 'V I M U K T H I - ＭＤ' 
global.sessionName = 'session.json'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: 'Succeed.',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Owner Bot s Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number User Special Features',
    wait: 'Loading...',
    done: 'Done',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    wrongFormat: 'Wrong order !!\nInclude Link after Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.thumb = fs.readFileSync('./media/zaki.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
