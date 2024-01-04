import { ethers } from 'ethers';
import abi from "./abi.json"

declare global {
  interface Window {
    ethereum: any
  }
}

// create a function that initializes the contract object
export async function createContractObject() {
  // get the provider and signer
  const provider = new ethers.BrowserProvider(window.ethereum)
  const signer = await provider.getSigner()

  // create the contract object using the ABI and contract address
  const contract = new ethers.Contract(
    '0x53C090A70B2f220861fBD4BE7F01d9Fbf50317F3',
    abi,
    signer,
  )

  return contract
}
