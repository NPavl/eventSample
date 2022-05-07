var Web3 = require("web3");
const eventSampleJSON = require('../build/contracts/eventSample.json'); 
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
 
web3.eth.defaultAccount = web3.eth.accounts[0]; 

// var abi = [{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"age","type":"uint256"}],"name":"Instructor","type":"event"},{"constant":false,"inputs":[{"name":"_fName","type":"string"},{"name":"_age","type":"uint256"}],"name":"setInstructor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInstructor","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]; 
var eventSampleContract = web3.eth.contract(eventSampleJSON.abi);

// Идентификатор контракта, который включается в выходную информацию о выполнении команды миграции, а также может быть найден в списке транзакций Ganache
var contractId = '0x76fe49643908046c53f2aa9744ebddc55620add2'; // адресс контракта после миграции на тестовую сеть ganache после каждого перезапуска 
// тестовой сети адрес контракта меняй его здесь.  
var eventSample = eventSampleContract.at(contractId);

var instructorEvent = eventSample.Instructor();
var NameIvent = eventSample.Name();

NameIvent.watch(function(error, result) {
    if (!error) {
        console.info(result.args.name + ' ' + 'Вот такое имя');
    } else {
        console.log(error);
    }
    
})

instructorEvent.watch(function(error, result) {
    if (!error) {
        // Просмотр информации о компании
        console.info(result.args.name + ' (' + result.args.age + ' years old)');
        // Просмотр всей информации
        console.info(result);
    } else {
        console.log(error);
    }
});

Coursetro.setInstructor("gates", "28"); // дефолтное имя и возраст 

