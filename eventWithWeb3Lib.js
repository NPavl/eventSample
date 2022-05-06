старый пример из курса по солидити криптозомбаков https://cryptozombies.io/ru/course/ прослушивание событий на UI с использованием библиотеки web3

// Как осуществляется доступ к контракту:
var abi = /* abi generated by the compiler */
var ZombieFactoryContract = web3.eth.contract(abi)
var contractAddress = /* our contract address on Ethereum after deploying */
var ZombieFactory = ZombieFactoryContract.at(contractAddress)
// `ZombieFactory` получил доступ к открытым функциям и событиям

// «Слушатель» событий принимает введенный текст 
$("#ourButton").click(function(e) {
  var name = $("#nameInput").val()
  // Вызываем функцию контракта `createRandomZombie`:
  ZombieFactory.createRandomZombie(name)
})

// Слушаем событие `NewZombie` и обновляем UI (интерфейс)
var event = ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  generateZombie(result.zombieId, result.name, result.dna)
})

// Возьмем ДНК зомби и обновим изображение 
function generateZombie(id, name, dna) {
  let dnaStr = String(dna)
  // Заполним ячейки нулями, если ДНК получилось меньше 16 знаков 
  while (dnaStr.length < 16)
    dnaStr = "0" + dnaStr

  let zombieDetails = {
    // Первые 2 цифры задают голову. Всего возможно 7 вариантов голов, поэтому % 7
    // Получить цифры от 0 до 6, затем добавить 1, чтобы сделать их от 1 до 7. Так будет 7 вариантов
    // Файлы с именами от "head1.png" до "head7.png" загружаем, исходя из этого номера:
    headChoice: dnaStr.substring(0, 2) % 7 + 1,
    // Вторые 2 цифры задают глаза, 11 вариантов:
    eyeChoice: dnaStr.substring(2, 4) % 11 + 1,
    // 6 вариантов мундиров:
    shirtChoice: dnaStr.substring(4, 6) % 6 + 1,
    // Последние 6 цифр задают цвет. Обновления используют фильтр CSS с углом поворота 360 градусов:
    skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),
    eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),
    clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),
    zombieName: name,
    zombieDescription: "A Level 1 CryptoZombie",
  }
  return zombieDetails
}