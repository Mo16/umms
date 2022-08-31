var account = null;




const contractABI = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }],
    "name": "ApprovalForAll",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
    }, {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
    }],
    "name": "TransferBatch",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "TransferSingle",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "string",
        "name": "value",
        "type": "string"
    }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }],
    "name": "URI",
    "type": "event"
}, {
    "inputs": [],
    "name": "ARTWORK",
    "outputs": [{
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "PRICE",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "SUPPLY_MAX",
    "outputs": [{
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
    }, {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
    }],
    "name": "balanceOfBatch",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "baseURI",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address[]",
        "name": "to",
        "type": "address[]"
    }, {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
    }, {
        "internalType": "uint256[]",
        "name": "quantity",
        "type": "uint256[]"
    }],
    "name": "batchMintForAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint32",
        "name": "quantity",
        "type": "uint32"
    }],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
    }, {
        "internalType": "uint32",
        "name": "quantity",
        "type": "uint32"
    }],
    "name": "mintForAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
    }, {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "string",
        "name": "_uri",
        "type": "string"
    }],
    "name": "setURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "supply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
    }],
    "name": "uri",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]


var web3Provider;
const CA = '0xf9cc31f8ec42383ea910793f1c1c3447a42de7ad'
const ethers = Moralis.web3Library

var connection

const serverUrl = "https://nhdmuynaxpjm.usemoralis.com:2053/server";
const appId = "P4lxLGJjwCtShYU4942YsP8ezdR9uxAqNJ81pTPv";

Moralis.start({
    serverUrl,
    appId
});

document.getElementById("onconnect").style.display = "none"

function truncate(input) {
    return `${input.slice(0, 4)}..${input.slice(-2)}`
}



async function login() {
    await Moralis.User.logOut();

    console.log("logged out");
    if (typeof window.ethereum != 'undefined') {
        var user = await Moralis.Web3.authenticate({
            chainId: 1
        });
        web3Provider = await Moralis.enableWeb3();

        await Moralis.switchNetwork("0x1")


        if (user) {

            console.log(user.get('ethAddress'))
            account = user.get('ethAddress')
            document.getElementById("connect").innerHTML = truncate(account)
            document.getElementById("mint").innerHTML = "Mint"
            document.getElementById("mint").onclick = mint
            document.getElementById("onconnect").style.display = "block"
            document.getElementById("beforeconnect").style.display = "none"



        }
        connection = "metamask"
    } else {
        var user = await Moralis.Web3.authenticate({
            provider: "walletconnect"
        })


        web3Provider = await Moralis.enableWeb3({
            provider: "walletconnect"
        });


        if (user) {
            console.log(user.get('ethAddress'))
            account = user.get('ethAddress')
            document.getElementById("connect").innerHTML = truncate(account)
            document.getElementById("mint").innerHTML = "Mint"
            document.getElementById("mint").onclick = mint
            document.getElementById("onconnect").style.display = "block"
            document.getElementById("beforeconnect").style.display = "none"

            console.log(truncate(account))

        }
        connection = "walletconnect"

    }

}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

async function mint() {

    if (account == null) {
        login()

    }

    if (connection == "metamask") {
        await Moralis.switchNetwork("0x1")


        var amountOfTokens = parseInt(document.getElementById("numTokens").innerHTML)
        console.log(amountOfTokens)

        const sendOptions = {
            contractAddress: CA,
            functionName: "mint",
            abi: contractABI,
            msgValue: Moralis.Units.ETH(0.05 * amountOfTokens),
            params: {
                quantity: amountOfTokens,
            },
        }


        const NFTcontract = new ethers.Contract(CA, contractABI, web3Provider);


        console.log(await NFTcontract.name())
        try {

            transaction = await Moralis.executeFunction(sendOptions)
            document.getElementById("mint").innerHTML = "Minting..."

            const receipt = await transaction.wait()
            console.log(receipt)
            document.getElementById("mint").innerHTML = "Minted!"


        } catch (err) {
            console.log(err)
            if (err["code"] == "INSUFFICIENT_FUNDS") {
                alert("INSUFFICIENT FUNDS")
            } else if (err["code"] == 4001) {
                alert("Metamask Tx closed")

            } else {
                alert(err)
            }



        }
    } else if (connection == "walletconnect") {



        var amountOfTokens = parseInt(document.getElementById("numTokens").innerText)
        console.log(amountOfTokens)

        const sendOptions = {
            contractAddress: CA,
            functionName: "mint",
            abi: contractABI,
            msgValue: Moralis.Units.ETH(0.05 * amountOfTokens),
            params: {
                quantity: amountOfTokens,
            },
        }


        const NFTcontract = new ethers.Contract(CA, contractABI, web3Provider);

        try {
            transaction = await Moralis.executeFunction(sendOptions)
            document.getElementById("mint").innerHTML = "Minting..."

            const receipt = await transaction.wait()
            console.log(receipt)
            document.getElementById("mint").innerHTML = "Minted!"

        } catch (err) {
            console.log(err)
            if (err["code"] == "INSUFFICIENT_FUNDS") {
                alert("INSUFFICIENT FUNDS")
            } else if (err["code"] == 4001) {
                alert("Metamask Tx closed")

            } else {
                alert(err)
            }



        }
    }




}