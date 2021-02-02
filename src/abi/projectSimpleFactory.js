export const projectSimpleFactoryABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'ProjectName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'TokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'TokenSymbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'TokenDecimal',
            type: 'uint8',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'TokenPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint8',
                name: 'OwnerTokensPercent',
                type: 'uint8',
              },
              {
                internalType: 'uint64',
                name: 'Duration',
                type: 'uint64',
              },
            ],
            internalType: 'struct Project.InitPresale',
            name: 'Presale',
            type: 'tuple',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint64',
                    name: 'Duration',
                    type: 'uint64',
                  },
                  {
                    internalType: 'uint8',
                    name: 'StakeUnlock',
                    type: 'uint8',
                  },
                  {
                    components: [
                      {
                        internalType: 'uint64',
                        name: 'Duration',
                        type: 'uint64',
                      },
                      {
                        components: [
                          {
                            internalType: 'uint8',
                            name: 'Schema',
                            type: 'uint8',
                          },
                          {
                            internalType: 'uint64',
                            name: 'Value',
                            type: 'uint64',
                          },
                        ],
                        internalType: 'struct Voting.VoteFilter[]',
                        name: 'Filters',
                        type: 'tuple[]',
                      },
                    ],
                    internalType: 'struct Voting.VoteProperty',
                    name: 'Vote',
                    type: 'tuple',
                  },
                ],
                internalType: 'struct Project.InitSeries[]',
                name: 'Series',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct Project.InitSeason[]',
            name: 'Seasons',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct Project.InitProjectProperty',
        name: 'property',
        type: 'tuple',
      },
      {
        internalType: 'contract Porgi',
        name: 'porgi',
        type: 'address',
      },
    ],
    name: 'CreateProject',
    outputs: [
      {
        internalType: 'contract Project',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
