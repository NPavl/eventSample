// SPDX-License-Identifier: MIT
pragma solidity 0.4.22;
 
contract eventSample {
    string fName;
    uint age;
    string sName;
 
    event Instructor(string name, uint age);
    event Name(string name);
    function setInstructor(string memory _fName, uint _age) public {
        fName = _fName;
        age = _age;
        emit Instructor(_fName, _age);  
    }
    
    function getInstructor() view public returns (string memory, uint) {
        return (fName, age);
    }
    
      // добавим свою простую функцию которая будет просто возвращать результат и записывать событие в журнал 
    function hello(string memory _name) public returns(string memory) {
        sName = _name;
        emit Name(_name);
    }
    
}
