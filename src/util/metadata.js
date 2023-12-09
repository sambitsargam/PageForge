export const USER_CONTRACT = {
  "_format": "hh-sol-artifact-1",
  "contractName": "UserContract",
  "sourceName": "contracts/UserContract.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_purpose",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_chainId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_cid",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_consultFee",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_ens",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_consultFee",
          "type": "uint256"
        }
      ],
      "name": "ConsultEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_cid",
          "type": "string"
        }
      ],
      "name": "PurchaseEvent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "active",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "chainId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_newPrice",
          "type": "uint256"
        }
      ],
      "name": "changePrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "consultFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deployer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ens",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getCid",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMetadata",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "cid",
              "type": "string"
            }
          ],
          "internalType": "struct UserContract.Offer",
          "name": "",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasAccess",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "offer",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "cid",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "purchaseAccess",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "purchaseConsult",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "purpose",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "toggleActive",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001e6838038062001e6883398181016040528101906200003791906200030c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600060146101000a81548160ff0219169083151502179055508760019081620000a39190620006b1565b508660029081620000b59190620006b1565b50856003819055506040518060600160405280858152602001848152602001868152506005600082015181600001556020820151816001019081620000fb9190620006b1565b506040820151816002019081620001139190620006b1565b509050508160088190555080600490816200012f9190620006b1565b50505050505050505062000798565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001a7826200015c565b810181811067ffffffffffffffff82111715620001c957620001c86200016d565b5b80604052505050565b6000620001de6200013e565b9050620001ec82826200019c565b919050565b600067ffffffffffffffff8211156200020f576200020e6200016d565b5b6200021a826200015c565b9050602081019050919050565b60005b83811015620002475780820151818401526020810190506200022a565b60008484015250505050565b60006200026a6200026484620001f1565b620001d2565b90508281526020810184848401111562000289576200028862000157565b5b6200029684828562000227565b509392505050565b600082601f830112620002b657620002b562000152565b5b8151620002c884826020860162000253565b91505092915050565b6000819050919050565b620002e681620002d1565b8114620002f257600080fd5b50565b6000815190506200030681620002db565b92915050565b600080600080600080600080610100898b03121562000330576200032f62000148565b5b600089015167ffffffffffffffff8111156200035157620003506200014d565b5b6200035f8b828c016200029e565b985050602089015167ffffffffffffffff8111156200038357620003826200014d565b5b620003918b828c016200029e565b9750506040620003a48b828c01620002f5565b965050606089015167ffffffffffffffff811115620003c857620003c76200014d565b5b620003d68b828c016200029e565b9550506080620003e98b828c01620002f5565b94505060a089015167ffffffffffffffff8111156200040d576200040c6200014d565b5b6200041b8b828c016200029e565b93505060c06200042e8b828c01620002f5565b92505060e089015167ffffffffffffffff8111156200045257620004516200014d565b5b620004608b828c016200029e565b9150509295985092959890939650565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004c357607f821691505b602082108103620004d957620004d86200047b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005437fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000504565b6200054f868362000504565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005926200058c6200058684620002d1565b62000567565b620002d1565b9050919050565b6000819050919050565b620005ae8362000571565b620005c6620005bd8262000599565b84845462000511565b825550505050565b600090565b620005dd620005ce565b620005ea818484620005a3565b505050565b5b81811015620006125762000606600082620005d3565b600181019050620005f0565b5050565b601f82111562000661576200062b81620004df565b6200063684620004f4565b8101602085101562000646578190505b6200065e6200065585620004f4565b830182620005ef565b50505b505050565b600082821c905092915050565b6000620006866000198460080262000666565b1980831691505092915050565b6000620006a1838362000673565b9150826002028217905092915050565b620006bc8262000470565b67ffffffffffffffff811115620006d857620006d76200016d565b5b620006e48254620004aa565b620006f182828562000616565b600060209050601f83116001811462000729576000841562000714578287015190505b62000720858262000693565b86555062000790565b601f1984166200073986620004df565b60005b8281101562000763578489015182556001820191506020850194506020810190506200073c565b868310156200078357848901516200077f601f89168262000673565b8355505b6001600288020188555050505b505050505050565b6116c080620007a86000396000f3fe6080604052600436106100f35760003560e01c806399e288d81161008a578063c028df0611610059578063c028df06146102d0578063d3419723146102fd578063d5f394881461033a578063f11aaba314610365576100f3565b806399e288d8146102545780639a8a059214610272578063a2b40d191461029d578063ba058a63146102c6576100f3565b806370740aab116100c657806370740aab146101905780637a5b4f59146101bb57806395a078e8146101ec57806398d5fdca14610229576100f3565b806302fb0c5e146100f857806306fdde031461012357806329c68dc11461014e5780633f15457f14610165575b600080fd5b34801561010457600080fd5b5061010d610390565b60405161011a919061104b565b60405180910390f35b34801561012f57600080fd5b506101386103a3565b60405161014591906110f6565b60405180910390f35b34801561015a57600080fd5b50610163610431565b005b34801561017157600080fd5b5061017a6104b5565b60405161018791906110f6565b60405180910390f35b34801561019c57600080fd5b506101a5610543565b6040516101b291906110f6565b60405180910390f35b3480156101c757600080fd5b506101d06105d1565b6040516101e39796959493929190611222565b60405180910390f35b3480156101f857600080fd5b50610213600480360381019061020e91906112de565b610909565b604051610220919061104b565b60405180910390f35b34801561023557600080fd5b5061023e610929565b60405161024b919061130b565b60405180910390f35b61025c610936565b60405161026991906110f6565b60405180910390f35b34801561027e57600080fd5b50610287610bd8565b604051610294919061130b565b60405180910390f35b3480156102a957600080fd5b506102c460048036038101906102bf9190611352565b610bde565b005b6102ce610c43565b005b3480156102dc57600080fd5b506102e5610d9a565b6040516102f49392919061137f565b60405180910390f35b34801561030957600080fd5b50610324600480360381019061031f91906112de565b610ec2565b60405161033191906110f6565b60405180910390f35b34801561034657600080fd5b5061034f610fe5565b60405161035c91906113c4565b60405180910390f35b34801561037157600080fd5b5061037a611009565b604051610387919061130b565b60405180910390f35b600060149054906101000a900460ff1681565b600180546103b09061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546103dc9061140e565b80156104295780601f106103fe57610100808354040283529160200191610429565b820191906000526020600020905b81548152906001019060200180831161040c57829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461048957600080fd5b600060149054906101000a900460ff1615600060146101000a81548160ff021916908315150217905550565b600480546104c29061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546104ee9061140e565b801561053b5780601f106105105761010080835404028352916020019161053b565b820191906000526020600020905b81548152906001019060200180831161051e57829003601f168201915b505050505081565b600280546105509061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461057c9061140e565b80156105c95780601f1061059e576101008083540402835291602001916105c9565b820191906000526020600020905b8154815290600101906020018083116105ac57829003601f168201915b505050505081565b6060806105dc61100f565b60006060600080600160026005600854600460035460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686805461061e9061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461064a9061140e565b80156106975780601f1061066c57610100808354040283529160200191610697565b820191906000526020600020905b81548152906001019060200180831161067a57829003601f168201915b505050505096508580546106aa9061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546106d69061140e565b80156107235780601f106106f857610100808354040283529160200191610723565b820191906000526020600020905b81548152906001019060200180831161070657829003601f168201915b5050505050955084604051806060016040529081600082015481526020016001820180546107509061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461077c9061140e565b80156107c95780601f1061079e576101008083540402835291602001916107c9565b820191906000526020600020905b8154815290600101906020018083116107ac57829003601f168201915b505050505081526020016002820180546107e29061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461080e9061140e565b801561085b5780601f106108305761010080835404028352916020019161085b565b820191906000526020600020905b81548152906001019060200180831161083e57829003601f168201915b50505050508152505094508280546108729061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461089e9061140e565b80156108eb5780601f106108c0576101008083540402835291602001916108eb565b820191906000526020600020905b8154815290600101906020018083116108ce57829003601f168201915b50505050509250965096509650965096509650965090919293949596565b60096020528060005260406000206000915054906101000a900460ff1681565b6000600560000154905090565b6060600060149054906101000a900460ff16610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097e906114b1565b60405180910390fd5b6000600560000154141580156109e75750600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15610a9b576005600001543414610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a90611543565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610a99573d6000803e3d6000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff167f514a7727631c32fb8ee0600229e363e89e2667e97edd7a6aab5ea5dc0a7c5ae36005600201604051610ae591906115fc565b60405180910390a26001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060056002018054610b559061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b819061140e565b8015610bce5780601f10610ba357610100808354040283529160200191610bce565b820191906000526020600020905b815481529060010190602001808311610bb157829003601f168201915b5050505050905090565b60035481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c3657600080fd5b8060056000018190555050565b600060149054906101000a900460ff16610c92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c89906114b1565b60405180910390fd5b600060085414610d48576008543414610ce0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd790611543565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610d46573d6000803e3d6000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff167f83aa25ec9fa904e8359a27bbf88b7a9ae304a9e0c8b374b1cb3c39fec21d4134600854604051610d90919061130b565b60405180910390a2565b6005806000015490806001018054610db19061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ddd9061140e565b8015610e2a5780601f10610dff57610100808354040283529160200191610e2a565b820191906000526020600020905b815481529060010190602001808311610e0d57829003601f168201915b505050505090806002018054610e3f9061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6b9061140e565b8015610eb85780601f10610e8d57610100808354040283529160200191610eb8565b820191906000526020600020905b815481529060010190602001808311610e9b57829003601f168201915b5050505050905083565b6060600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f479061166a565b60405180910390fd5b60056002018054610f609061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8c9061140e565b8015610fd95780601f10610fae57610100808354040283529160200191610fd9565b820191906000526020600020905b815481529060010190602001808311610fbc57829003601f168201915b50505050509050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b60405180606001604052806000815260200160608152602001606081525090565b60008115159050919050565b61104581611030565b82525050565b6000602082019050611060600083018461103c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110a0578082015181840152602081019050611085565b60008484015250505050565b6000601f19601f8301169050919050565b60006110c882611066565b6110d28185611071565b93506110e2818560208601611082565b6110eb816110ac565b840191505092915050565b6000602082019050818103600083015261111081846110bd565b905092915050565b6000819050919050565b61112b81611118565b82525050565b600082825260208201905092915050565b600061114d82611066565b6111578185611131565b9350611167818560208601611082565b611170816110ac565b840191505092915050565b60006060830160008301516111936000860182611122565b50602083015184820360208601526111ab8282611142565b915050604083015184820360408601526111c58282611142565b9150508091505092915050565b6111db81611118565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061120c826111e1565b9050919050565b61121c81611201565b82525050565b600060e082019050818103600083015261123c818a6110bd565b9050818103602083015261125081896110bd565b90508181036040830152611264818861117b565b905061127360608301876111d2565b818103608083015261128581866110bd565b905061129460a08301856111d2565b6112a160c0830184611213565b98975050505050505050565b600080fd5b6112bb81611201565b81146112c657600080fd5b50565b6000813590506112d8816112b2565b92915050565b6000602082840312156112f4576112f36112ad565b5b6000611302848285016112c9565b91505092915050565b600060208201905061132060008301846111d2565b92915050565b61132f81611118565b811461133a57600080fd5b50565b60008135905061134c81611326565b92915050565b600060208284031215611368576113676112ad565b5b60006113768482850161133d565b91505092915050565b600060608201905061139460008301866111d2565b81810360208301526113a681856110bd565b905081810360408301526113ba81846110bd565b9050949350505050565b60006020820190506113d96000830184611213565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061142657607f821691505b602082108103611439576114386113df565b5b50919050565b7f436f6e747261637420776173206d61726b656420696e6163746976652062792060008201527f63726561746f7200000000000000000000000000000000000000000000000000602082015250565b600061149b602783611071565b91506114a68261143f565b604082019050919050565b600060208201905081810360008301526114ca8161148e565b9050919050565b7f496e636f72726563742070726963652c20706c656173652063616c6c20636f6e60008201527f74726163742077697468206e6f6e7a65726f2076616c75650000000000000000602082015250565b600061152d603883611071565b9150611538826114d1565b604082019050919050565b6000602082019050818103600083015261155c81611520565b9050919050565b60008190508160005260206000209050919050565b600081546115858161140e565b61158f8186611071565b945060018216600081146115aa57600181146115c0576115f3565b60ff1983168652811515602002860193506115f3565b6115c985611563565b60005b838110156115eb578154818901526001820191506020810190506115cc565b808801955050505b50505092915050565b600060208201905081810360008301526116168184611578565b905092915050565b7f43616c6c20707572636861736541636365737320746f20676574206369640000600082015250565b6000611654601e83611071565b915061165f8261161e565b602082019050919050565b6000602082019050818103600083015261168381611647565b905091905056fea26469706673582212208b31c760e630bf579880f41f67f264bfb7fc22b23bcda888f95150738ed9c01664736f6c63430008130033",
  "deployedBytecode": "0x6080604052600436106100f35760003560e01c806399e288d81161008a578063c028df0611610059578063c028df06146102d0578063d3419723146102fd578063d5f394881461033a578063f11aaba314610365576100f3565b806399e288d8146102545780639a8a059214610272578063a2b40d191461029d578063ba058a63146102c6576100f3565b806370740aab116100c657806370740aab146101905780637a5b4f59146101bb57806395a078e8146101ec57806398d5fdca14610229576100f3565b806302fb0c5e146100f857806306fdde031461012357806329c68dc11461014e5780633f15457f14610165575b600080fd5b34801561010457600080fd5b5061010d610390565b60405161011a919061104b565b60405180910390f35b34801561012f57600080fd5b506101386103a3565b60405161014591906110f6565b60405180910390f35b34801561015a57600080fd5b50610163610431565b005b34801561017157600080fd5b5061017a6104b5565b60405161018791906110f6565b60405180910390f35b34801561019c57600080fd5b506101a5610543565b6040516101b291906110f6565b60405180910390f35b3480156101c757600080fd5b506101d06105d1565b6040516101e39796959493929190611222565b60405180910390f35b3480156101f857600080fd5b50610213600480360381019061020e91906112de565b610909565b604051610220919061104b565b60405180910390f35b34801561023557600080fd5b5061023e610929565b60405161024b919061130b565b60405180910390f35b61025c610936565b60405161026991906110f6565b60405180910390f35b34801561027e57600080fd5b50610287610bd8565b604051610294919061130b565b60405180910390f35b3480156102a957600080fd5b506102c460048036038101906102bf9190611352565b610bde565b005b6102ce610c43565b005b3480156102dc57600080fd5b506102e5610d9a565b6040516102f49392919061137f565b60405180910390f35b34801561030957600080fd5b50610324600480360381019061031f91906112de565b610ec2565b60405161033191906110f6565b60405180910390f35b34801561034657600080fd5b5061034f610fe5565b60405161035c91906113c4565b60405180910390f35b34801561037157600080fd5b5061037a611009565b604051610387919061130b565b60405180910390f35b600060149054906101000a900460ff1681565b600180546103b09061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546103dc9061140e565b80156104295780601f106103fe57610100808354040283529160200191610429565b820191906000526020600020905b81548152906001019060200180831161040c57829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461048957600080fd5b600060149054906101000a900460ff1615600060146101000a81548160ff021916908315150217905550565b600480546104c29061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546104ee9061140e565b801561053b5780601f106105105761010080835404028352916020019161053b565b820191906000526020600020905b81548152906001019060200180831161051e57829003601f168201915b505050505081565b600280546105509061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461057c9061140e565b80156105c95780601f1061059e576101008083540402835291602001916105c9565b820191906000526020600020905b8154815290600101906020018083116105ac57829003601f168201915b505050505081565b6060806105dc61100f565b60006060600080600160026005600854600460035460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686805461061e9061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461064a9061140e565b80156106975780601f1061066c57610100808354040283529160200191610697565b820191906000526020600020905b81548152906001019060200180831161067a57829003601f168201915b505050505096508580546106aa9061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546106d69061140e565b80156107235780601f106106f857610100808354040283529160200191610723565b820191906000526020600020905b81548152906001019060200180831161070657829003601f168201915b5050505050955084604051806060016040529081600082015481526020016001820180546107509061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461077c9061140e565b80156107c95780601f1061079e576101008083540402835291602001916107c9565b820191906000526020600020905b8154815290600101906020018083116107ac57829003601f168201915b505050505081526020016002820180546107e29061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461080e9061140e565b801561085b5780601f106108305761010080835404028352916020019161085b565b820191906000526020600020905b81548152906001019060200180831161083e57829003601f168201915b50505050508152505094508280546108729061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461089e9061140e565b80156108eb5780601f106108c0576101008083540402835291602001916108eb565b820191906000526020600020905b8154815290600101906020018083116108ce57829003601f168201915b50505050509250965096509650965096509650965090919293949596565b60096020528060005260406000206000915054906101000a900460ff1681565b6000600560000154905090565b6060600060149054906101000a900460ff16610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097e906114b1565b60405180910390fd5b6000600560000154141580156109e75750600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b15610a9b576005600001543414610a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a90611543565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610a99573d6000803e3d6000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff167f514a7727631c32fb8ee0600229e363e89e2667e97edd7a6aab5ea5dc0a7c5ae36005600201604051610ae591906115fc565b60405180910390a26001600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060056002018054610b559061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b819061140e565b8015610bce5780601f10610ba357610100808354040283529160200191610bce565b820191906000526020600020905b815481529060010190602001808311610bb157829003601f168201915b5050505050905090565b60035481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c3657600080fd5b8060056000018190555050565b600060149054906101000a900460ff16610c92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c89906114b1565b60405180910390fd5b600060085414610d48576008543414610ce0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd790611543565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610d46573d6000803e3d6000fd5b505b3373ffffffffffffffffffffffffffffffffffffffff167f83aa25ec9fa904e8359a27bbf88b7a9ae304a9e0c8b374b1cb3c39fec21d4134600854604051610d90919061130b565b60405180910390a2565b6005806000015490806001018054610db19061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ddd9061140e565b8015610e2a5780601f10610dff57610100808354040283529160200191610e2a565b820191906000526020600020905b815481529060010190602001808311610e0d57829003601f168201915b505050505090806002018054610e3f9061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6b9061140e565b8015610eb85780601f10610e8d57610100808354040283529160200191610eb8565b820191906000526020600020905b815481529060010190602001808311610e9b57829003601f168201915b5050505050905083565b6060600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f479061166a565b60405180910390fd5b60056002018054610f609061140e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8c9061140e565b8015610fd95780601f10610fae57610100808354040283529160200191610fd9565b820191906000526020600020905b815481529060010190602001808311610fbc57829003601f168201915b50505050509050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b60405180606001604052806000815260200160608152602001606081525090565b60008115159050919050565b61104581611030565b82525050565b6000602082019050611060600083018461103c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110a0578082015181840152602081019050611085565b60008484015250505050565b6000601f19601f8301169050919050565b60006110c882611066565b6110d28185611071565b93506110e2818560208601611082565b6110eb816110ac565b840191505092915050565b6000602082019050818103600083015261111081846110bd565b905092915050565b6000819050919050565b61112b81611118565b82525050565b600082825260208201905092915050565b600061114d82611066565b6111578185611131565b9350611167818560208601611082565b611170816110ac565b840191505092915050565b60006060830160008301516111936000860182611122565b50602083015184820360208601526111ab8282611142565b915050604083015184820360408601526111c58282611142565b9150508091505092915050565b6111db81611118565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061120c826111e1565b9050919050565b61121c81611201565b82525050565b600060e082019050818103600083015261123c818a6110bd565b9050818103602083015261125081896110bd565b90508181036040830152611264818861117b565b905061127360608301876111d2565b818103608083015261128581866110bd565b905061129460a08301856111d2565b6112a160c0830184611213565b98975050505050505050565b600080fd5b6112bb81611201565b81146112c657600080fd5b50565b6000813590506112d8816112b2565b92915050565b6000602082840312156112f4576112f36112ad565b5b6000611302848285016112c9565b91505092915050565b600060208201905061132060008301846111d2565b92915050565b61132f81611118565b811461133a57600080fd5b50565b60008135905061134c81611326565b92915050565b600060208284031215611368576113676112ad565b5b60006113768482850161133d565b91505092915050565b600060608201905061139460008301866111d2565b81810360208301526113a681856110bd565b905081810360408301526113ba81846110bd565b9050949350505050565b60006020820190506113d96000830184611213565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061142657607f821691505b602082108103611439576114386113df565b5b50919050565b7f436f6e747261637420776173206d61726b656420696e6163746976652062792060008201527f63726561746f7200000000000000000000000000000000000000000000000000602082015250565b600061149b602783611071565b91506114a68261143f565b604082019050919050565b600060208201905081810360008301526114ca8161148e565b9050919050565b7f496e636f72726563742070726963652c20706c656173652063616c6c20636f6e60008201527f74726163742077697468206e6f6e7a65726f2076616c75650000000000000000602082015250565b600061152d603883611071565b9150611538826114d1565b604082019050919050565b6000602082019050818103600083015261155c81611520565b9050919050565b60008190508160005260206000209050919050565b600081546115858161140e565b61158f8186611071565b945060018216600081146115aa57600181146115c0576115f3565b60ff1983168652811515602002860193506115f3565b6115c985611563565b60005b838110156115eb578154818901526001820191506020810190506115cc565b808801955050505b50505092915050565b600060208201905081810360008301526116168184611578565b905092915050565b7f43616c6c20707572636861736541636365737320746f20676574206369640000600082015250565b6000611654601e83611071565b915061165f8261161e565b602082019050919050565b6000602082019050818103600083015261168381611647565b905091905056fea26469706673582212208b31c760e630bf579880f41f67f264bfb7fc22b23bcda888f95150738ed9c01664736f6c63430008130033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}