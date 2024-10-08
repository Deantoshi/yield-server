module.exports = {
  allLendingPools: {
    constant: true,
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allLendingPools',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  allLendingPoolsLength: {
    constant: true,
    inputs: [],
    name: 'allLendingPoolsLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  getLendingPool: {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'getLendingPool',
    outputs: [
      {
        internalType: 'bool',
        name: 'initialized',
        type: 'bool',
      },
      {
        internalType: 'uint24',
        name: 'lendingPoolId',
        type: 'uint24',
      },
      {
        internalType: 'address',
        name: 'collateral',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrowable0',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrowable1',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  underlying: {
    constant: true,
    inputs: [],
    name: 'underlying',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  totalBorrows: {
    constant: true,
    inputs: [],
    name: 'totalBorrows',
    outputs: [{ internalType: 'uint112', name: '', type: 'uint112' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  underlying: {
    constant: true,
    inputs: [],
    name: 'underlying',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  symbol: {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  getReserves: {
    constant: true,
    inputs: [],
    name: 'getReserves',
    outputs: [
      { internalType: 'uint112', name: 'reserve0', type: 'uint112' },
      { internalType: 'uint112', name: 'reserve1', type: 'uint112' },
      { internalType: 'uint32', name: 'blockTimestampLast', type: 'uint32' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  token0: {
    constant: true,
    inputs: [],
    name: 'token0',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  token1: {
    constant: true,
    inputs: [],
    name: 'token1',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  decimals: {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  reserveFactor: {
    constant: true,
    inputs: [],
    name: 'reserveFactor',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  borrowRate: {
    constant: true,
    inputs: [],
    name: 'borrowRate',
    outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  factory: {
    inputs: [],
    name: 'factory',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  totalSupply: {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType:'uint256', name: '', 'type': 'uint256'}],
    payable: false,
    stateMutability:'view',
    type: 'function'
  },
  safetyMarginSqrt: {
    constant: true,
    inputs: [],
    name: 'safetyMarginSqrt',
    outputs: [{ internalType:'uint256', name: '', 'type': 'uint256'}],
    payable: false,
    stateMutability:'view',
    type: 'function'
  },
  liquidationPenalty: {
    constant: true,
    inputs: [],
    name: 'liquidationPenalty',
    outputs: [{ internalType:'uint256', name: '', 'type': 'uint256'}],
    payable: false,
    stateMutability:'view',
    type: 'function'
  },
  liquidationIncentive: {
    constant: true,
    inputs: [],
    name: 'liquidationIncentive',
    outputs: [{ internalType:'uint256', name: '', 'type': 'uint256'}],
    payable: false,
    stateMutability:'view',
    type: 'function'
  },
};
