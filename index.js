/**
 * This example demonstrates setting up a webook, using a
 * self-signed certificate.
 */

// var fs = require('file-system');
const TOKEN = process.env.TELEGRAM_TOKEN || '755380132:AAH326o9uguBRBOC9qpGX_n5TvQug85W8Ys'
const TelegramBot = require('node-telegram-bot-api')
const options = {
  webHook: {
    port: 443,
    key: 'D:/FILES/J2019/node/telebot/key.pem',
    cert: 'D:/FILES/J2019/node/telebot/server.crt'
  }
}
// This URL must route to the port set above (i.e. 443)
const url = 'https://b77999ed.ngrok.io'
const bot = new TelegramBot(TOKEN, { polling: true })

// This informs the Telegram servers of the new webhook.
bot.setWebHook(`${url}/bot${TOKEN}`, {
  certificate: options.webHook.cert
})

// Just to ping!
bot.on('message', function onMessage (msg) {
  bot.sendMessage(msg.chat.id, 'I am alive!')
})
