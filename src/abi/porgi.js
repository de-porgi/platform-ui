export default [
  {
    inputs: [
      {
        internalType: 'contract MiniMeTokenFactory',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'contract VotingSimpleFactory',
        name: 'voting',
        type: 'address',
      },
      {
        internalType: 'contract ProjectSimpleFactory',
        name: 'project',
        type: 'address',
      },
      {
        internalType: 'contract WETHGateway',
        name: 'gateway',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AaveWETHGateway',
    outputs: [
      {
        internalType: 'contract WETHGateway',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
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
    ],
    name: 'AddProject',
    outputs: [
      {
        internalType: 'contract Project',
        name: 'newProject',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum Porgi.ProjectState',
        name: 'state',
        type: 'uint8',
      },
    ],
    name: 'ChangeState',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Project',
        name: 'project',
        type: 'address',
      },
    ],
    name: 'GetProjectStatistic',
    outputs: [
      {
        components: [
          {
            internalType: 'enum Porgi.ProjectState',
            name: 'State',
            type: 'uint8',
          },
          {
            internalType: 'uint32',
            name: 'Index',
            type: 'uint32',
          },
        ],
        internalType: 'struct Porgi.Statistic',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum Porgi.ProjectState',
        name: 'state',
        type: 'uint8',
      },
    ],
    name: 'GetProjectsBy',
    outputs: [
      {
        internalType: 'contract Project[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'GetProjectsOf',
    outputs: [
      {
        internalType: 'contract Project[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GetProjectsOwners',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ProjectFactory',
    outputs: [
      {
        internalType: 'contract ProjectSimpleFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TokenFactory',
    outputs: [
      {
        internalType: 'contract MiniMeTokenFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VotingFactory',
    outputs: [
      {
        internalType: 'contract VotingSimpleFactory',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
