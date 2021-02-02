export class SmartContract {
  constructor(address, web3, abi) {
    this.address = address
    this.abi = abi
    this.contract = web3.eth.Contract(abi, address)
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
