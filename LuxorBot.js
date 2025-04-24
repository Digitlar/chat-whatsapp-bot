
const venom = require('venom-bot');

venom
  .create({
    session: 'luxor-bot',
  })
  .then((client) => start(client))
  .catch((err) => console.log(err));

function start(client) {
  client.onMessage(async (message) => {
    const text = message.body.toLowerCase();
    if (text === 'oi' || text === 'olá') {
      await client.sendText(
        message.from,
        'Olá! 👋\nSou o assistente virtual da *Luxor Imobiliária*.\nVocê deseja *comprar* ou *alugar* um imóvel?'
      );
    } else if (text.includes('comprar')) {
      await client.sendText(message.from, 'Show! 🏠 Em qual *cidade* você está procurando um imóvel para comprar?');
    } else if (text.includes('alugar')) {
      await client.sendText(message.from, 'Legal! 🏡 Em qual *bairro ou cidade* você gostaria de alugar?');
    } else {
      await client.sendText(message.from, 'Desculpe, não entendi. 😅\nVocê quer *comprar* ou *alugar* um imóvel?');
    }
  });
}
