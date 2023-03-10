import AVVY from '@avvy/client'
import { ethers } from 'ethers'

const main = async () => {
  const provider = new ethers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc')
  const avvy = AVVY(provider, {})
  const names = await avvy.batch([
    '0x9BC4e7C1Fa4Ca66f6B2F4B6F446Dad80Ec541983',
  ]).reverseToNames(3)
  console.log('Reverse-resolving 0x9BC4e7C1Fa4Ca66f6B2F4B6F446Dad80Ec541983 to a .avax name')
  console.log('0x9BC4e7C1Fa4Ca66f6B2F4B6F446Dad80Ec541983 maps to ' + names[0])
}

main()

