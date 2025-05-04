// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PurchaseTracker {
    address public companyWallet; // Dirección de la wallet de la empresa
    
    struct Purchase {
        string[] items;     // Qué se compró
        string company;     // Dónde se compró
        uint256 amount;     // Cuánto se pagó
        uint256 timestamp;  // Cuándo se compró
        address buyer;      // Quién compró
    }

    // Array para almacenar todas las compras
    Purchase[] public purchases;
    
    // Evento para registrar una nueva compra
    event PurchaseRecorded(
        string[] items,
        string company,
        uint256 amount,
        uint256 timestamp,
        address buyer
    );

    // Constructor que recibe la dirección de la wallet de la empresa
    constructor(address _companyWallet) {
        require(_companyWallet != address(0), "Direccion de wallet invalida");
        companyWallet = _companyWallet;
    }

    // Función para registrar una nueva compra
    function recordPurchase(
        string[] memory _items,
        string memory _company,
        uint256 _amount,
        uint256 _timestamp,
        address _buyer
    ) public {
        require(msg.sender == companyWallet, "Solo la wallet de la empresa puede registrar compras");
        require(_items.length > 0, "Debe haber al menos un item en la compra");
        require(_buyer != address(0), "Direccion del comprador invalida");
        require(_timestamp <= block.timestamp, "La fecha no puede ser futura");
        
        Purchase memory newPurchase = Purchase({
            items: _items,
            company: _company,
            amount: _amount,
            timestamp: _timestamp,
            buyer: _buyer
        });

        purchases.push(newPurchase);
        
        emit PurchaseRecorded(
            _items,
            _company,
            _amount,
            _timestamp,
            _buyer
        );
    }
}
