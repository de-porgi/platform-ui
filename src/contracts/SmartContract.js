import Web3 from 'web3'

export class SmartContract {
  constructor(address, abi) {
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:7545/')
    this.address = address
    this.abi = abi
    this.contract = new this.web3.eth.Contract(abi, address)
  }

  call(meth) {
    return meth
      .call()
      .then(res => {
        return res
      })
      .catch(err => {
        console.error(err.message)
        return 'Failed to fetch =('
      })
  }

  send(meth) {
    return meth
      .send()
      .then(res => {
        return res
      })
      .catch(err => {
        console.error(err.message)
        return 'Failed to send =('
      })
  }
}
