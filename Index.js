const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('ready', () => {
  console.log('✅ Bot iko tayari!');
});

client.on('message', msg => {
  if (msg.body.toLowerCase() === 'oy familia') {
    msg.reply('Oy familia 💪🔥 bot iko live!');
  }
});

(async () => {
  await client.initialize();

  // 🔑 WEKA NAMBA YAKO HAPA (NO +)
  const phoneNumber = '255742700114';

  try {
    const code = await client.requestPairingCode(phoneNumber);
    console.log('🔐 PAIRING CODE:', code);
  } catch (err) {
    console.error('❌ Pairing error:', err);
  }
})();
