//"use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

// Unpkg imports
let web3Modal_ = {
    Web3Modal: window.Web3Modal.default,
    WalletConnectProvider: window.WalletConnectProvider.default,
    EvmChains: window.EvmChains,
    Fortmatic: window.Fortmatic,
    // Web3modal instance
    web3Modal: 0,
    // Chosen wallet provider given by the dialog window
    provider: 0,
    // Address of the selected account
    selectedAccount: 0,
    init() {
        console.log("Initializing example");
        console.log("WalletConnectProvider is", this.WalletConnectProvider);
        console.log("Fortmatic is", this.Fortmatic);
        // Tell Web3modal what providers we have available.
        // Built-in web browser provider (only one can exist as a time)
        // like MetaMask, Brave or Opera is added automatically by Web3modal

        /*
        const providerOptions = {
            walletconnect: {
                package: this.WalletConnectProvider,
                options: {
                    // Mikko's test key - don't copy as your mileage may vary
                    infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
                }
            },
            fortmatic: {
                package: this.Fortmatic,
                options: {
                    // Mikko's TESTNET api key
                    key: "pk_test_391E26A3B43A3350"
                }
            }
        };
        this.web3Modal = new this.Web3Modal({
            cacheProvider: false, // optional
            providerOptions, // required
        });
        */

    },


    /**
     * Kick in the UI action after Web3modal dialog has chosen a provider
     */
    async fetchAccountData() {
        // Get a Web3 instance for the wallet
        const web3 = new this.Web3(this.provider);
        console.log("Web3 instance is", this.web3);
        // Get connected chain id from Ethereum node
        const chainId = await web3.eth.getChainId();
        console.log(chainId)
            // Load chain information over an HTTP API
        const chainData = await this.EvmChains.getChain(this.chainId);
        document.querySelector("#network-name").textContent = chainData.name;
        // Get list of accounts of the connected wallet
        const accounts = await web3.eth.getAccounts();
        // MetaMask does not give you all accounts, only the selected account
        console.log("Got accounts", accounts);
        this.selectedAccount = accounts[0];
        document.querySelector("#selected-account").textContent = this.selectedAccount;
        // Get a handl
        const template = document.querySelector("#template-balance");
        const accountContainer = document.querySelector("#accounts");
        // Purge UI elements any previously loaded accounts
        accountContainer.innerHTML = '';
        // Go through all accounts and get their ETH balance
        const rowResolvers = accounts.map(async(address) => {
            const balance = await web3.eth.getBalance(address);
            // ethBalance is a BigNumber instance
            // https://github.com/indutny/bn.js/
            const ethBalance = web3.utils.fromWei(balance, "ether");
            const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
            // Fill in the templated row and put in the document
            const clone = template.content.cloneNode(true);
            clone.querySelector(".address").textContent = address;
            clone.querySelector(".balance").textContent = humanFriendlyBalance;
            accountContainer.appendChild(clone);
        });
        // Because rendering account does its own RPC commucation
        // with Ethereum node, we do not want to display any results
        // until data for all accounts is loaded
        await Promise.all(rowResolvers);
        // Display fully loaded UI for wallet data
        document.querySelector("#prepare").style.display = "none";
        document.querySelector("#connected").style.display = "block";
    },



    /**
     * Fetch account data for UI when
     * - User switches accounts in wallet
     * - User switches networks in wallet
     * - User connects wallet initially
     */
    async refreshAccountData() {

        // If any current data is displayed when
        // the user is switching acounts in the wallet
        // immediate hide this data
        document.querySelector("#connected").style.display = "none";
        document.querySelector("#prepare").style.display = "block";
        // Disable button while UI is loading.
        // fetchAccountData() will take a while as it communicates
        // with Ethereum node via JSON-RPC and loads chain data
        // over an API call.
        document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
        await this.thisfetchAccountData(this.provider);
        document.querySelector("#btn-connect").removeAttribute("disabled")
    },


    /**
     * Connect wallet button pressed.
     */
    async onConnect() {
        console.log("Opening a dialog", this.web3Modal);
        try {
            this.provider = await this.web3Modal.connect();
        } catch (e) {
            console.log("Could not get a wallet connection", e);
            return;
        }

        // Subscribe to accounts change
        this.provider.on("accountsChanged", (accounts) => {
            console.log(accounts)
            this.fetchAccountData();
        });

        // Subscribe to chainId change
        this.provider.on("chainChanged", (chainId) => {
            console.log(chainId)
            this.fetchAccountData();
        });

        // Subscribe to networkId change
        this.provider.on("networkChanged", (networkId) => {
            console.log(networkId)
            this.fetchAccountData();
        });

        await this.refreshAccountData();
    },

    /**
     * Disconnect wallet button pressed.
     */
    async onDisconnect() {
        console.log("Killing the wallet connection", this.provider);
        // TODO: Which providers have close method?
        if (this.provider.close) {
            await this.provider.close();
            // If the cached provider is not cleared,
            // WalletConnect will default to the existing session
            // and does not allow to re-scan the QR code with a new wallet.
            // Depending on your use case you may want or want not his behavir.
            await this.web3Modal.clearCachedProvider();
            this.provider = null;
        }

        this.selectedAccount = null;

        // Set the UI back to the initial state
        document.querySelector("#prepare").style.display = "block";
        document.querySelector("#connected").style.display = "none";
    },



}


//export default web3Modal_;