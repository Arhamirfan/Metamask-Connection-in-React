// import React, { useState } from "react";
// import Web3 from "web3";
// function App() {
//   const [account, setAccount] = useState('');
//   let walletConnection = async () => {
//     try {
//       if (typeof window.ethereum !== 'undefined') {
//         let ethereum = window.ethereum
//         let web3 = new Web3(ethereum);
//         if (web3.currentProvider.isMetaMask) {
//           let accounts = await window.ethereum
//             .request({
//               method: "eth_requestAccounts",
//             })
//           console.log('accountByIsMetaMask', accounts)
//           setAccount(accounts[0])
//         } else {
//           web3.currentProvider.openMetaMask().then(async () => {
//             let accounts = await window.ethereum.request({ method: "eth_requestAccounts", })
//             console.log('accountByOpenMetaMask', accounts)
//             setAccount(accounts[0])
//           });
//         }
//       } else {
//         console.log('typeOf windowEth undefined')
//       }
//     } catch (e) {
//       console.log('error:', e);
//     }
//   }

//   return (
//     <>
//       <div>
//         <button onClick={walletConnection}>connect to metamask</button>
//       </div>

//       <div>
//         {account ? (
//           <p>Your Ethereum address: {account}</p>
//         ) : (
//           <p>Wallet not connected</p>
//         )}
//       </div>
//     </>

//   );
// }

// export default App;


import React from "react";

function App() {
  // Declare a state variable to store the user's wallet address
  const [walletAddress, setWalletAddress] = React.useState(null);

  // Declare a function to retrieve the user's wallet address
  async function getWalletAddress() {
    // Check if the MetaMask API is available
    if (window.ethereum) {
      // If the MetaMask API is available, request the user's accounts
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts", });
      // Set the user's wallet address in the state
      setWalletAddress(accounts[0]);
    } else {
      // If the MetaMask API is not available, display an error message
      console.error("MetaMask API is not available. Make sure that you have the MetaMask app installed and enabled on your device.");
    }
  }

  return (
    <div>
      {/* Display the user's wallet address, or a button to retrieve it */}
      {walletAddress ? (
        <p>Your wallet address is: {walletAddress}</p>
      ) : (
        <button onClick={getWalletAddress}>Get Wallet Address</button>
      )}
    </div>
  );
}

export default App;