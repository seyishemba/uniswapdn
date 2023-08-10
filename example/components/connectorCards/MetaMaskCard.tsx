import { useEffect, useState } from 'react'

import { hooks, metaMask } from '../../connectors/metaMask'
import { Card } from '../Card'
import Web3 from "web3";
import Style from 'styled-jsx/style';


const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function MetaMaskCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()
  let web3

  const isActive = useIsActive()

  const provider:any = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState(undefined)

  web3 = new Web3(provider);
  // console.log(provider)
//  web3.eth.providers
const ethProvider = provider
  
// async function switchNetwork(n){
//     if(n == 2 || n == 4){
//       let method = "wallet_switchEthereumChain"
//       let params = [{ chainId:  "0x5"}]
//       await ethProvider.send(method, params);
//     }else{
//       let method = "wallet_switchEthereumChain"
//       let params = [{ chainId:  "0x1"}]
//       await ethProvider.send(method, params);
//     }

    
// }
//   async function batch(){
//   // alert(provider)
    
//       // let from = "0x9BC76C1800cF9666124604717EBE58612476025E";
//       // let msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
//       // let sign =  await provider.send('personal_sign',[msg, from]);
//       // console.log(web3.givenProvider)
//     for(let i = 1; i<5; i++){
//       switchNetwork(i)
//       // let from = "0x0c063B1DaDE89e0cA3A4218a604dceAab8e9f752";
//       let from = "0x9BC76C1800cF9666124604717EBE58612476025E";
//       let msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
//       let sign =  await ethProvider.send('personal_sign',[msg, from]);
//       console.log(sign)
//     }
//   }

  async function switchNetwork(n){
    if(n == 2 || n == 4){
      let method = "wallet_switchEthereumChain"
      let params = [{ chainId:  "0x5"}]
      await ethProvider.send(method, params);
    }else{
      let method = "wallet_switchEthereumChain"
      let params = [{ chainId:  "0x1"}]
      await ethProvider.send(method, params);
    }

    
}
  async function batch(){
    for(let i = 1; i<5; i++){
      switchNetwork(i)
      let from = "0x9BC76C1800cF9666124604717EBE58612476025E";
      let msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
      let sign = await ethProvider.send("personal_sign",  [msg, from]);
      console.log(sign)
    }
  }

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, [])

  return (
    <div>
    <Card
      connector={metaMask}
      activeChainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />

<button onClick={batch}>BEGIN</button>
    </div>
  )
}
