export default [
	{
		"inputs": [
			{
				"internalType": "contract Porgi",
				"name": "porgi",
				"type": "address"
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
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "contract MiniMeToken",
				"name": "_cloneToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_snapshotBlock",
				"type": "uint256"
			}
		],
		"name": "NewCloneToken",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ActiveVoting",
		"outputs": [
			{
				"internalType": "contract Voting",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
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
						"name": "Vote",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "TokensEmissionPercent",
								"type": "uint256"
							},
							{
								"internalType": "uint64",
								"name": "Emissions",
								"type": "uint64"
							},
							{
								"internalType": "uint8",
								"name": "OwnerTokensPercent",
								"type": "uint8"
							},
							{
								"internalType": "uint64",
								"name": "TimeBetweenEmissions",
								"type": "uint64"
							}
						],
						"internalType": "struct Common.InitSecondaryPresale",
						"name": "Presale",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "Duration",
								"type": "uint64"
							},
							{
								"internalType": "uint8",
								"name": "StakeUnlock",
								"type": "uint8"
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
								"name": "Vote",
								"type": "tuple"
							}
						],
						"internalType": "struct Common.InitSeries[]",
						"name": "Series",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Common.InitNextSeason",
				"name": "_season",
				"type": "tuple"
			}
		],
		"name": "AddNextSeasons",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FinishPresale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Common.VoteResult",
				"name": "result",
				"type": "uint8"
			}
		],
		"name": "FinishVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetETHBalance",
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
		"name": "GetProjectBaseInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
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
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "int8",
				"name": "",
				"type": "int8"
			},
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
		"name": "GetSeasons",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "OwnerPercent",
								"type": "uint8"
							},
							{
								"internalType": "uint256",
								"name": "Price",
								"type": "uint256"
							},
							{
								"internalType": "uint64",
								"name": "Start",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "Duration",
								"type": "uint64"
							},
							{
								"internalType": "uint256",
								"name": "TotalGenerated",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "MinCap",
								"type": "uint256"
							}
						],
						"internalType": "struct Project.TokenFirstPresale",
						"name": "Presale",
						"type": "tuple"
					},
					{
						"internalType": "int8",
						"name": "ActiveSeries",
						"type": "int8"
					},
					{
						"internalType": "uint8",
						"name": "StakePercentsLeft",
						"type": "uint8"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "Start",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "Duration",
								"type": "uint64"
							},
							{
								"internalType": "uint8",
								"name": "StakeUnlock",
								"type": "uint8"
							},
							{
								"internalType": "contract Voting",
								"name": "Vote",
								"type": "address"
							}
						],
						"internalType": "struct Project.SeriesStruct[]",
						"name": "Series",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Project.FirstSeason",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "contract Voting",
						"name": "Vote",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "TokensEmissionPercent",
								"type": "uint256"
							},
							{
								"internalType": "uint64",
								"name": "Emissions",
								"type": "uint64"
							},
							{
								"internalType": "uint8",
								"name": "OwnerPercent",
								"type": "uint8"
							},
							{
								"internalType": "uint64",
								"name": "TimeBetweenEmissions",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "TimeLastEmission",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "EmissionsMade",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "Start",
								"type": "uint64"
							},
							{
								"internalType": "uint256",
								"name": "TokensAtStart",
								"type": "uint256"
							}
						],
						"internalType": "struct Project.TokenSecondaryPresale",
						"name": "Presale",
						"type": "tuple"
					},
					{
						"internalType": "int8",
						"name": "ActiveSeries",
						"type": "int8"
					},
					{
						"internalType": "uint8",
						"name": "StakePercentsLeft",
						"type": "uint8"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "Start",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "Duration",
								"type": "uint64"
							},
							{
								"internalType": "uint8",
								"name": "StakeUnlock",
								"type": "uint8"
							},
							{
								"internalType": "contract Voting",
								"name": "Vote",
								"type": "address"
							}
						],
						"internalType": "struct Project.SeriesStruct[]",
						"name": "Series",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Project.NextSeason[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "ProjectName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "TokenName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "TokenSymbol",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "TokenDecimal",
						"type": "uint8"
					},
					{
						"components": [
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "TokenPrice",
										"type": "uint256"
									},
									{
										"internalType": "uint8",
										"name": "OwnerTokensPercent",
										"type": "uint8"
									},
									{
										"internalType": "uint64",
										"name": "Duration",
										"type": "uint64"
									},
									{
										"internalType": "uint256",
										"name": "MinCap",
										"type": "uint256"
									}
								],
								"internalType": "struct Common.InitFirstPresale",
								"name": "Presale",
								"type": "tuple"
							},
							{
								"components": [
									{
										"internalType": "uint64",
										"name": "Duration",
										"type": "uint64"
									},
									{
										"internalType": "uint8",
										"name": "StakeUnlock",
										"type": "uint8"
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
										"name": "Vote",
										"type": "tuple"
									}
								],
								"internalType": "struct Common.InitSeries[]",
								"name": "Series",
								"type": "tuple[]"
							}
						],
						"internalType": "struct Common.InitFirstSeason",
						"name": "FirstSeason",
						"type": "tuple"
					}
				],
				"internalType": "struct Common.InitProjectProperty",
				"name": "property",
				"type": "tuple"
			}
		],
		"name": "Init",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Invest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Owner",
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
		"name": "ProjectName",
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
				"internalType": "bytes",
				"name": "oneInchCallData",
				"type": "bytes"
			}
		],
		"name": "SellTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "StartNextSeason",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "StartPresale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "State",
		"outputs": [
			{
				"internalType": "enum Project._ProjectState",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WithdrawETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remaining",
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
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_extraData",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
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
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_blockNumber",
				"type": "uint256"
			}
		],
		"name": "balanceOfAt",
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
				"name": "_newController",
				"type": "address"
			}
		],
		"name": "changeController",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "controller",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "_cloneTokenName",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_cloneDecimalUnits",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_cloneTokenSymbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_snapshotBlock",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_transfersEnabled",
				"type": "bool"
			}
		],
		"name": "createCloneToken",
		"outputs": [
			{
				"internalType": "contract MiniMeToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "creationBlock",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "destroyTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_transfersEnabled",
				"type": "bool"
			}
		],
		"name": "enableTransfers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "generateTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
		"name": "parentSnapShotBlock",
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
		"name": "parentToken",
		"outputs": [
			{
				"internalType": "contract MiniMeToken",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
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
		"name": "totalSupply",
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
				"name": "_blockNumber",
				"type": "uint256"
			}
		],
		"name": "totalSupplyAt",
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
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transfersEnabled",
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
		"name": "version",
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
		"stateMutability": "payable",
		"type": "receive"
	}
]
