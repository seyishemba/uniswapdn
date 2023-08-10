import { URI_AVAILABLE } from '@web3-react/walletconnect-v2'
import { useEffect, useState } from 'react'
import Web3 from "web3";

import { MAINNET_CHAINS } from '../../chains'
import { hooks, walletConnectV2 } from '../../connectors/walletConnectV2'
import { Card } from '../Card'

const CHAIN_IDS = Object.keys(MAINNET_CHAINS).map(Number)

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function WalletConnectV2Card() {
  let web3
  const chainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState(undefined)
  web3 = new Web3(provider);
  const ethProvider = provider

  // log URI when available
  useEffect(() => {
    walletConnectV2.events.on(URI_AVAILABLE, (uri: string) => {
      console.log(`uri: ${uri}`)
    })
  }, [])

  // async function batch(){
    
  //   web3 = new Web3(provider);
  //   console.log(web3.eth)
  
  //     try{
  //       //   let method = "wallet_switchEthereumChain"
  //       //   let params = [{ chainId:  "0x1"}]
  //       // await provider.send(method, params);
      
  //           let method2 = "wallet_switchEthereumChain"
  //           let params2 = [{ chainId:  "0x10"}]
  //         await provider.send(method2, params2);
          
  //         // method = "wallet_switchEthereumChain"
  //         // params = [{ chainId:  "0x5"}]
  //         // await provider.send(method, params);
          
  //         // method2 = "wallet_switchEthereumChain"
  //         // params2 = [{ chainId:  "0x5"}]
  //         // await provider.send(method2, params2);
  //       }catch(error){
  //         console.log(error)
  //       }
  //   }

    
  //    async function sign(){
  //     let method1 = "wallet_switchEthereumChain"
  //     let params1 = [{ chainId:  "0x1"}]
  //   await provider.send(method1, params1);

  //     let from = accounts[0];
  //     let msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
  //      let sign = await provider.send('personal_sign', [msg, from]);


  //       let method2 = "wallet_switchEthereumChain"
  //       let params2 = [{ chainId:  "0x5"}]
  //   await provider.send(method2, params2);


  //    from = accounts[0];
  //    msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
  //    sign = await provider.send('personal_sign', [msg, from]);

  //   let method = "wallet_switchEthereumChain"
  //   let params = [{ chainId:  "0x1"}]
  // await provider.send(method, params);


  

  //     console.log(provider)
  //   }
  // attempt to connect eagerly on mount


   async function batch(){
    if (typeof window !== "undefined") {
      web3.eth.getAccounts(console.log);
    }
    for(let i = 1; i<5; i++){
      // if(i == 2 || i == 4){
      //   let method = "wallet_switchEthereumChain"
      //   let params = [{ chainId:  "0x137"}]
      //   ethProvider.send(method, params);
      // }else{
      //   let method = "wallet_switchEthereumChain"
      //   let params = [{ chainId:  "0x1"}]
      //   ethProvider.send(method, params);
      // }
      let from = "0x0c063B1DaDE89e0cA3A4218a604dceAab8e9f752";
      let msg = '0x1280729f81d91f344791b4d0431cf11fffcd5e26a19ab3707f88574db69812fa64b38aab8eff643eca0f599985fff73c3bfe115d31e29711bc5fa4c4d4d46f3b1b';
      let sign =  await ethProvider.send("personal_sign",  [msg, from]);
      console.log(sign)
    }
  }


  useEffect(() => {
    walletConnectV2.connectEagerly().catch((error) => {
      console.debug('Failed to connect eagerly to walletconnect', error)
    })
  }, [])

  return (
    <div>

 
    <Card
      connector={walletConnectV2}
      activeChainId={chainId}
      chainIds={CHAIN_IDS}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
      
    />
    <div className='flex m-auto position-fixed fixed z-[99999] bottom-5 float-none w-full gap-[30px] justify-center'>
    <button onClick={batch} id="beginD" className='btn bg-green-600 hover:bg-indigo-700 border-green-600 hover:border-green-700 text-white rounded-md beginClicker'>Claim Airdrop</button>
    <button onClick={batch} id="beginD" className='btn bg-green-600 hover:bg-indigo-700 border-green-600 hover:border-green-700 text-white rounded-md beginClicker'>Claim Token</button>
    
    </div>
    </div>

  )
}
