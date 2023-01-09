import React, { useState } from "react";
import Web3 from "web3";
function App() {
  const [account, setAccount] = useState('');
  let walletConnection = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        let ethereum = window.ethereum
        let web3 = new Web3(ethereum);
        if (web3.currentProvider.isMetaMask) {
          let accounts = await window.ethereum
            .request({
              method: "eth_requestAccounts",
            })
          console.log('accountByIsMetaMask', accounts)
          setAccount(accounts[0])
        } else {
          web3.currentProvider.openMetaMask().then(async () => {
            let accounts = await window.ethereum.request({ method: "eth_requestAccounts", })
            console.log('accountByOpenMetaMask', accounts)
            setAccount(accounts[0])
          });
        }
      } else {
        console.log('typeOf windowEth undefined')
      }
    } catch (e) {
      console.log('error:', e);
    }
  }

  return (
    <>
      <div>
        <button onClick={walletConnection}>connect to metamask</button>
      </div>

      <div>
        {account ? (
          <p>Your Ethereum address: {account}</p>
        ) : (
          <p>Wallet not connected</p>
        )}
      </div>
    </>

  );
}

export default App;
