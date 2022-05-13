import React, {useState} from 'react'
//npm install --save ethers
//import {ethers} from 'ethers'

//https://www.youtube.com/watch?v=uWeK30vg35c --> Metamask Connection
//https://docs.kaikas.io/02_api_reference/01_klaytn_provider --> Kaikas Connection

const Wallet = () => {

    //Metamask Code
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userWallet, setUserWallet] = useState(null);
    //const [connButtonText, setConnButtonText] = useState('Connect Wallet'); 

    const connectKaikasWalletHandler = async () => {
        setErrorMessage('');

        const chainId = '8217';
        if (window.klaytn && window.klaytn.isKaikas) {
            console.log("Kaikas Here!");
            //alert(window.klaytn.networkVersion);

            if (window.klaytn.networkVersion != chainId) {
                return setErrorMessage('Please connect to Mainnet Chain on your Kaikas Wallet');
            }

            var klaytn = window.klaytn;

            try {
                const accounts = await klaytn.enable();
                accountChangedHandler(accounts[0]);
                setUserWallet('Kaikas');

              } catch (error) {
                // Handle error. Likely the user rejected the login
                setErrorMessage(error.message);
              }

        }else{
            console.log('Need to install Kaikas');
            setErrorMessage('Please install Kaikas browser extension to interact');
        }
    }

    const connectMetaMaskWalletHandler = () => {
        setErrorMessage('');

        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            window.ethereum.request({ method: 'eth_requestAccounts'})
            .then(result => {
                accountChangedHandler(result[0]);
                //setConnButtonText('Wallet Connected');
                //getAccountBalance(result[0]);
                setUserWallet('MetaMask');
            })
            .catch(error => {
                setErrorMessage(error.message);
            });

        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        //getAccountBalance(newAccount.toString());
    }

    /*const getAccountBalance = (account) => {
        window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
        .catch(error => {
            setErrorMessage(error.message);
        });
    };*/

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }


    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', function() {
        chainChangedHandler();
    });

    window.klaytn.on('accountsChanged', accountChangedHandler);
      
    window.klaytn.on('networkChanged', function() {
        chainChangedHandler();
    });

    return (

        <div className="row">
        <h4>Connect to Wallet</h4>
        <div className="col-lg-3 mb30">
            <span className="box-url" onClick={connectMetaMaskWalletHandler}>
                <img src="./img/wallet/1.png" alt="" className="mb20"/>
                <h4>Metamask</h4>
            </span>
            </div>
            <div className="col-lg-3 mb30">
                <span className="box-url" onClick={connectKaikasWalletHandler}>
                    <img src="./img/wallet/9.png" alt="" className="mb20"/>
                    <h4>Kaikas</h4>
                </span>
            </div>   
            <div className='col-lg-3 mb30'>
            <h3> {"Wallet Connection"} </h3>
                {//<button onClick={connectMetaMaskWalletHandler}>{connButtonText}</button>
                }
                <div className='accountDisplay'>
                    <h3>Address: {defaultAccount}</h3>
                </div>
                <div className='walletDisplay'>
                    <h3>Wallet: {userWallet}</h3>
                </div>
                {errorMessage}
            </div>      
        </div>  
    )
    /*
  <div className="row">
    <div className="col-lg-3 mb30">
        <span className="box-url">
            <span className="box-url-label">Most Popular</span>
            <img src="./img/wallet/1.png" alt="" className="mb20"/>
            <h4>Metamask</h4>
            <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
        </span>
    </div>

    <div className="col-lg-3 mb30">
        <span className="box-url">
            <img src="./img/wallet/2.png" alt="" className="mb20"/>
            <h4>Bitski</h4>
            <p>Bitski connects communities, creators and brands through unique, ownable digital content.</p>
        </span>
    </div>       

    <div className="col-lg-3 mb30">
        <span className="box-url">
            <img src="./img/wallet/3.png" alt="" className="mb20"/>
            <h4>Fortmatic</h4>
            <p>Let users access your Ethereum app from anywhere. No more browser extensions.</p>
        </span>
    </div>    

    <div className="col-lg-3 mb30">
        <span className="box-url">
            <img src="./img/wallet/4.png" alt="" className="mb20"/>
            <h4>WalletConnect</h4>
            <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
        </span>
    </div>

    <div className="col-lg-3 mb30">
        <span className="box-url">
            <img src="./img/wallet/5.png" alt="" className="mb20"/>
            <h4>Coinbase Wallet</h4>
            <p>The easiest and most secure crypto wallet. ... No Coinbase account required.
            </p>
        </span>
    </div>

    <div className="col-lg-3 mb30">
        <span className="box-url">
            <img src="./img/wallet/6.png" alt="" className="mb20"/>
            <h4>Arkane</h4>
            <p>Make it easy to create blockchain applications with secure wallets solutions.</p>
        </span>
    </div>       

    <div className="col-lg-3 mb30">
        <span className="box-url">
            <img src="./img/wallet/7.png" alt="" className="mb20"/>
            <h4>Authereum</h4>
            <p>Your wallet where you want it. Log into your favorite dapps with Authereum.</p>
        </span>
    </div>    

    <div className="col-lg-3 mb30">
        <span className="box-url">
            <span className="box-url-label">Most Simple</span>
            <img src="./img/wallet/8.png" alt="" className="mb20"/>
            <h4>Torus</h4>
            <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
        </span>
    </div>                                  
</div>  */
};
export default Wallet;