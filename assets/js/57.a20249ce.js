(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{433:function(e,a,t){"use strict";t.r(a);var r=t(5),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"validator-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator-setup"}},[e._v("#")]),e._v(" Validator Setup")]),e._v(" "),t("p",[e._v("This is a detailed step-by-step guide for setting up a Terra validator. Please be aware that while it is easy to set up a rudimentary validating node, running a performant production-quality validator node with a robust architecture and security features can require a non-trivial setup.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Block42 has put together an excellent, step-by-step guide for setting up a new validator that you can find "),t("a",{attrs:{href:"https://medium.com/block42-blockchain-company/how-to-setup-a-terra-luna-validator-node-860d8ea7aea2",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("This guide starts with the following assumptions:")]),e._v(" "),t("ul",[t("li",[e._v("You have "),t("a",{attrs:{href:"../node/installation"}},[e._v("installed")]),e._v(" the Terra Full Node Software.")]),e._v(" "),t("li",[e._v("You have "),t("a",{attrs:{href:"../node/join-network"}},[e._v("connected it")]),e._v(" to an existing network.")]),e._v(" "),t("li",[e._v("You have "),t("a",{attrs:{href:"../node/config"}},[e._v("configured it")]),e._v(" properly.")]),e._v(" "),t("li",[e._v("You know your way around "),t("a",{attrs:{href:"../terracli"}},[e._v("terracli")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"register-your-validator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-your-validator"}},[e._v("#")]),e._v(" Register your Validator")]),e._v(" "),t("p",[e._v("You will need to know the consensus PubKey ("),t("code",[e._v("terravalconspub-")]),e._v(") of your node to create a new validator. You can find it with:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terrad tendermint show-validator\n")])])]),t("p",[e._v("Next, create your "),t("code",[e._v("terrad gentx")]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli tx staking create-validator "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("5000000uluna "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --pubkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("terrad tendermint show-validator"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"choose a moniker"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("chain_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --commission-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.10"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --commission-max-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.20"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --commission-max-change-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.01"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --min-self-delegation"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),e._v("\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("When specifying commission parameters, the "),t("code",[e._v("commission-max-change-rate")]),e._v(" is used to measure % "),t("em",[e._v("point")]),e._v(" change over the "),t("code",[e._v("commission-rate")]),e._v(". E.g. 1% to 2% is a 100% rate increase, but only 1 percentage point.")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("If unspecified, "),t("code",[e._v("consensus_pubkey")]),e._v(" will default to the output of "),t("code",[e._v("terrad tendermint show-validator")]),e._v(". "),t("code",[e._v("key_name")]),e._v(" is the name of the private key that will be used to sign the transaction.")])]),e._v(" "),t("h2",{attrs:{id:"confirmation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confirmation"}},[e._v("#")]),e._v(" Confirmation")]),e._v(" "),t("p",[e._v("Your validator is active if the following command returns anything:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli query tendermint-validator-set "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("terrad tendermint show-validator"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v("\n")])])]),t("p",[e._v("You are looking for the "),t("code",[e._v("bech32")]),e._v(" encoded "),t("code",[e._v("address")]),e._v(" in the "),t("code",[e._v("~/.terrad/config/priv_validator.json")]),e._v(" file.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("To be in the validator set, you need to have more total voting power than the 100th validator.")])]),e._v(" "),t("h2",{attrs:{id:"set-up-oracle-feeder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-oracle-feeder"}},[e._v("#")]),e._v(" Set up Oracle Feeder")]),e._v(" "),t("p",[e._v("Every Terra validator needs to participate in the oracle process and periodically submit a vote for the exchange rate of LUNA in all of the whitelisted denominations. Since this process occurs rather frequently (every 30 seconds), you need to set up an automated process to avoid getting slashed and jailed.")]),e._v(" "),t("h3",{attrs:{id:"make-a-new-key-for-oracle-votes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#make-a-new-key-for-oracle-votes"}},[e._v("#")]),e._v(" Make a new key for oracle votes")]),e._v(" "),t("p",[e._v("You can separate the keys that are used for controlling your validator account from the ones that are submitting the oracle votes on behalf of your validator.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Show the feeder account details:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"delegate-feeder-consent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delegate-feeder-consent"}},[e._v("#")]),e._v(" Delegate feeder consent")]),e._v(" "),t("p",[e._v("The account address used to submit oracle voting transactions is called a "),t("code",[e._v("feeder")]),e._v(". When you set up your oracle voting process for the first time, you must send delegate the feeder permission to an account.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli tx oracle set-feeder "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder-address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("validator"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"send-funds-to-feeder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-funds-to-feeder"}},[e._v("#")]),e._v(" Send funds to feeder")]),e._v(" "),t("p",[e._v("The feeder needs funds in order to pay for transaction fees to submit oracle voting messages. Note that "),t("strong",[e._v("TerraKRW, not Luna")]),e._v(" are used for oracle voting fees because the smallest atomic unit of TerraKRW is much cheaper than Luna. You can send TerraKRW to your feeder address, or send Luna and perform an on-chain swap:")]),e._v(" "),t("h4",{attrs:{id:"sending-luna-to-feeder-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sending-luna-to-feeder-account"}},[e._v("#")]),e._v(" Sending Luna to feeder account")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli tx send "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("from-address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder-address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("luna-amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("uluna\n")])])]),t("h4",{attrs:{id:"example-of-swap-from-feeder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-swap-from-feeder"}},[e._v("#")]),e._v(" Example of swap from feeder")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli tx market swap "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("luna-amount"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("uluna ukrw --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("feeder"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"set-up-oracle-feeder-program"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-oracle-feeder-program"}},[e._v("#")]),e._v(" Set up oracle feeder program")]),e._v(" "),t("p",[e._v("Head over to "),t("RouterLink",{attrs:{to:"/validator/oracle.html#feeder-implementations"}},[e._v("Feeder Implementations")]),e._v(" to install a program and set one up to start submitting oracle messages with your feeder account.")],1),e._v(" "),t("h2",{attrs:{id:"court-delegations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#court-delegations"}},[e._v("#")]),e._v(" Court Delegations")]),e._v(" "),t("p",[e._v("The next following steps are things you can do to help improve your visibility and make yourself known to potential delegators.")]),e._v(" "),t("h3",{attrs:{id:"set-up-a-website"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-website"}},[e._v("#")]),e._v(" Set up a Website")]),e._v(" "),t("p",[e._v("Set up a website so that your delegators can find you. We recommend making a custom section for Terra delegators that instructs how to delegate Luna tokens.")]),e._v(" "),t("h3",{attrs:{id:"announce-on-discord"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#announce-on-discord"}},[e._v("#")]),e._v(" Announce on Discord")]),e._v(" "),t("p",[e._v("Join the "),t("a",{attrs:{href:"https://discord.gg/ZHBuKda",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra Validators Discord"),t("OutboundLink")],1),e._v(" channel and introduce yourself!")]),e._v(" "),t("h3",{attrs:{id:"submit-a-validator-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submit-a-validator-profile"}},[e._v("#")]),e._v(" Submit a Validator Profile")]),e._v(" "),t("p",[e._v("Get a fancy checkmark next to your name by submitting a "),t("a",{attrs:{href:"https://github.com/terra-project/validator-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Validator Profile"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/screens/validator-check.png",alt:"validator-profile"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);