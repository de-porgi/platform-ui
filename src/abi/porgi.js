export default[
	{
		"inputs": [
			{
				"internalType": "contract MiniMeTokenFactory",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "contract VotingSimpleFactory",
				"name": "voting",
				"type": "address"
			},
			{
				"internalType": "contract ProjectSimpleFactory",
				"name": "project",
				"type": "address"
			},
			{
				"internalType": "contract IWETHGateway",
				"name": "gateway",
				"type": "address"
			},
			{
				"internalType": "contract IOneInchExchange",
				"name": "exchange",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AaveWETHGateway",
		"outputs": [
			{
				"internalType": "contract IWETHGateway",
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
									}
								],
								"internalType": "struct Common.InitFistPresale",
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
					},
					{
						"components": [
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
						"internalType": "struct Common.InitNextSeason[]",
						"name": "NextSeasons",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Common.InitProjectProperty",
				"name": "property",
				"type": "tuple"
			}
		],
		"name": "AddProject",
		"outputs": [
			{
				"internalType": "contract Project",
				"name": "newProject",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Porgi.ProjectState",
				"name": "state",
				"type": "uint8"
			}
		],
		"name": "ChangeState",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract Project",
				"name": "project",
				"type": "address"
			}
		],
		"name": "GetProjectStatistic",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum Porgi.ProjectState",
						"name": "State",
						"type": "uint8"
					},
					{
						"internalType": "uint32",
						"name": "Index",
						"type": "uint32"
					}
				],
				"internalType": "struct Porgi.Statistic",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Porgi.ProjectState",
				"name": "state",
				"type": "uint8"
			}
		],
		"name": "GetProjectsBy",
		"outputs": [
			{
				"internalType": "contract Project[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "GetProjectsOf",
		"outputs": [
			{
				"internalType": "contract Project[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetProjectsOwners",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LinchExchange",
		"outputs": [
			{
				"internalType": "contract IOneInchExchange",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ProjectFactory",
		"outputs": [
			{
				"internalType": "contract ProjectSimpleFactory",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TokenFactory",
		"outputs": [
			{
				"internalType": "contract MiniMeTokenFactory",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "VotingFactory",
		"outputs": [
			{
				"internalType": "contract VotingSimpleFactory",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]