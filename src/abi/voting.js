export default [
	{
		"inputs": [
			{
				"internalType": "contract Project",
				"name": "prj",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "Duration",
						"type": "uint64"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "Schema",
								"type": "uint8"
							},
							{
								"internalType": "uint64",
								"name": "Value",
								"type": "uint64"
							}
						],
						"internalType": "struct Common.VoteFilter[]",
						"name": "Filters",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Common.VoteProperty",
				"name": "property",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "BlockStart",
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
		"name": "Cancel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Finish",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetProperty",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "Duration",
						"type": "uint64"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "Schema",
								"type": "uint8"
							},
							{
								"internalType": "uint64",
								"name": "Value",
								"type": "uint64"
							}
						],
						"internalType": "struct Common.VoteFilter[]",
						"name": "Filters",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Common.VoteProperty",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "IsOpen",
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
		"name": "Result",
		"outputs": [
			{
				"internalType": "enum Common.VoteResult",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Start",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TimestampStart",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalNo",
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
		"name": "TotalSupply",
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
		"name": "TotalYes",
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
				"internalType": "enum Common.VoteType",
				"name": "t",
				"type": "uint8"
			}
		],
		"name": "Vote",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "Votes",
		"outputs": [
			{
				"internalType": "enum Common.VoteType",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]