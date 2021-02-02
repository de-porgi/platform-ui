export const votingSimpleFactoryABI = [
  {
    inputs: [
      {
        internalType: 'contract Project',
        name: 'prj',
        type: 'address',
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
        name: 'property',
        type: 'tuple',
      },
    ],
    name: 'CreateVoting',
    outputs: [
      {
        internalType: 'contract Voting',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
