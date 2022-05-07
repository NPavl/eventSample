#### eventSample

> **примеры как прослушивать события из блокчена**: 
- 🐟 https://www.youtube.com/results?search_query=listen+events+with+ethers.js 
- 🐟 https://www.tutorialspoint.com/solidity/solidity_events.htm (web3)
- 🐟 https://russianblogs.com/article/7268701803/ (web3) 

- 🐟 https://ethereum.stackexchange.com/questions/87643/how-to-listen-to-contract-events-using-ethers-js (ethers.js)
- 🐟 https://docs.ethers.io/v5/api/providers/provider/#Provider--events (ethers.js)
- 🐟 https://docs.ethers.io/v5/concepts/events/ (ethers.js)

> **старый простой пример с исп трюфеля - как на тестовой сети прослушать инвенты, изменить данные в контракте и получить ивент в консоль**: 
- создать проект с трюфелем (npm/yarn init, truffle init, npm install --save web3@0.20.6)   
- запустить тестовую сеть: ganache-cli 
~~~
- в конфиге дефолтные парметры сети 
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  }
~~~
- задеплоить конракт  eventSample.sol на тестовой сети 
- в отдельном окне создать и запустить скрипт: node test.js 
> Прослушиватель события начнет работать и результат в консоль будет примерно такой: 
~~~
gates (28 years old)
{
  logIndex: 0,
  transactionIndex: 0,
  transactionHash: '0x94d99cc4cc1501bcdc3882dc700e55d0f21ec1906daad10b2a3cbe280ce32bb8',
  blockHash: '0xce927375473bd351595adda3cf6e3cadc74599dee787ab1f191d05beca63f42c',
  blockNumber: 3,
  address: '0x14951621ac99fec25a1ea5cad7c3016c92b26e74',
  type: 'mined',
  removed: false,
  event: 'Instructor',
  args: { name: 'gates', age: BigNumber { s: 1, e: 1, c: [Array] } }
}
~~~
> **далее пробуем изменить данные на новые в методе setInstructor и сразу получить результат от прослушивателя событий**: 
- truffle console 
- truffle(development)>  let instance = await eventSample.deployed()
> передаем новые параметры в метод setInstructor:
- truffle(development)> instance.setInstructor("Vasia", 25) 
> в коносоль сразу получаем новый обновленный результат: 
~~~
**Vasia (25 years old)**
{
  logIndex: 0,
  transactionIndex: 0,
  transactionHash: '0xf6aacad237874ee9d80292ac691feba7d4289c8bedb0aedb3262716d270305db',
  blockHash: '0xe026b36dacbd75d93b6decf7caaac69f34fb3254cf053ba4848e9e875f012f68',
  blockNumber: 8,
  address: '0x14951621ac99fec25a1ea5cad7c3016c92b26e74',
  type: 'mined',
  removed: false,
  event: 'Instructor',
  args: { name: 'Vasia', age: 25
{ s: 1, e: 1, c: [Array] } }
}
~~~ 


