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
    '0x36227C70601bb1F345FEf929AD235Eb919eb4fC6',
    abi,
    signer,
  )

  return contract
}
