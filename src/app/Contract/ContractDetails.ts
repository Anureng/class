import { ethers } from 'ethers';
import abi from "./abi.json"
import { useCallback } from 'react';

const abiCode =abi;
export default abiCode;  

declare global {
  interface Window {
    ethereum?: any;
  }
}


const _connectToMetaMask= useCallback(async () => {
  const ethereum = window.ethereum;
  // Check if MetaMask is installed
  if (typeof ethereum !== "undefined") {
    try {
      // Request access to the user's MetaMask accounts
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // Get the connected Ethereum address
      const address = accounts[0];
      // Check address in console of web browser
      console.log("connected to MetaMask with address: ", address);
    } catch (error: Error | any) {
      alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
    }
  } else {
    alert("MetaMask not installed");
  }
}, []);

async function interactWithContract() {
  const provider = await _connectToMetaMask();
  if (provider) {
    try {
      const contractAddress = 'YourContractAddress';
      const contractABI: any[] = [
        // ... ABI definition of your smart contract methods ...
      ];

      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Call a method on the contract (replace with your method and parameters)
      const result = await contract.someMethod();

      // Do something with the result
      console.log('Result from contract method:', result);
    } catch (error) {
      console.error('Error interacting with contract:', error);
    }
  } else {
    console.error('Provider not available. Please connect to MetaMask.');
  }
}

// Call the function to interact with the contract
interactWithContract();

