(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{414:function(t,a,e){"use strict";e.r(a);var s=e(5),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"terracli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terracli"}},[t._v("#")]),t._v(" terracli")]),t._v(" "),e("p",[t._v("This section is a reference for the functions available from "),e("code",[t._v("terracli")]),t._v(", the command line interface that connects a running "),e("code",[t._v("terrad")]),t._v(" process. For more information on the command usage, refer to its help screen: "),e("code",[t._v("terracli config --help")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"accessing-a-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessing-a-node"}},[t._v("#")]),t._v(" Accessing a Node")]),t._v(" "),e("p",[t._v("In order to query the state and send transactions, you need a way to access the network. "),e("code",[t._v("terracli")]),t._v(" is only the interface to access Terra; a node is the access point connected to the rest of the network through peer connections. You can either run your own full-node, or connect to someone else's.")]),t._v(" "),e("h3",{attrs:{id:"running-your-own-full-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-your-own-full-node"}},[t._v("#")]),t._v(" Running your own full-node")]),t._v(" "),e("p",[t._v("This is the most secure option, but comes with relatively high resource requirements. In order to run your own full-node, you need good bandwidth and at least 1TB of disk space.")]),t._v(" "),e("p",[t._v("You will find the tutorial on how to install "),e("code",[t._v("terrad")]),t._v(" "),e("RouterLink",{attrs:{to:"/node/installation.html"}},[t._v("here")]),t._v(", and how to set it up to connect to an existing Terra network "),e("RouterLink",{attrs:{to:"/node/join-network.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"connecting-to-a-remote-full-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-remote-full-node"}},[t._v("#")]),t._v(" Connecting to a remote full-node")]),t._v(" "),e("p",[t._v("If you do not want or cannot run your own node, you can connect to someone else's full-node. You should pick an operator you trust, because a malicious operator could return incorrect query results or censor your transactions. However, they will never be able to steal your funds, as your private keys are stored locally on your computer or ledger device. Possible options of full-node operators include validators, wallet providers or exchanges.")]),t._v(" "),e("p",[t._v("In order to connect to the full-node, you will need an address of the following form: "),e("code",[t._v("https://77.87.106.33:26657")]),t._v(" ("),e("em",[t._v("Note: This is a sample address")]),t._v("). This address has to be communicated by the full-node operator you choose to trust. You will use this address in the following section.")]),t._v(" "),e("h2",{attrs:{id:"configuring-terracli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-terracli"}},[t._v("#")]),t._v(" Configuring terracli")]),t._v(" "),e("p",[e("code",[t._v("terracli")]),t._v(" is the tool that enables you to interact with the node that runs on the Terra Protocol network, whether you run it yourself or not. Let us set it up properly.")]),t._v(" "),e("p",[t._v("In order to set up "),e("code",[t._v("terracli")]),t._v(", use the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli config "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("flag"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("It allows you to set a default value for each given flag.")]),t._v(" "),e("p",[t._v("First, set up the address of the full-node you want to connect to:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example: terracli config node https://77.87.106.33:26657")]),t._v("\nterracli config node "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("If you run your own full-node, just use "),e("code",[t._v("tcp://localhost:26657")]),t._v(" as the address.")]),t._v(" "),e("p",[t._v("Then, let us set the default value of the "),e("code",[t._v("--trust-node")]),t._v(" flag:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set to true if you run a light-client node, false otherwise")]),t._v("\nterracli config trust-node "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),e("p",[t._v("Finally, let us set the "),e("code",[t._v("chain-id")]),t._v(" of the blockchain we want to interact with:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli config chain-id soju-0014\n")])])]),e("h2",{attrs:{id:"querying-blockchain-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#querying-blockchain-state"}},[t._v("#")]),t._v(" Querying Blockchain State")]),t._v(" "),e("p",[e("code",[t._v("terracli")]),t._v(" lets you query all relevant information from the blockchain, like account balances, amount of bonded tokens, outstanding rewards, and more. Next is a list of the most useful commands for delegators.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query account balances and other account-related information")]),t._v("\nterracli query account\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query the list of validators")]),t._v("\nterracli query staking validators\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query the information of a validator given their address")]),t._v("\nterracli query staking validator "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("validatorAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query all delegations made from a delegator given their address")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (note: delegator addresses are regular account addresses)")]),t._v("\nterracli query staking delegations "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("delegatorAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query a specific delegation made from a delegator to a validator")]),t._v("\nterracli query staking delegation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("delegatorAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("validatorAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query the rewards of a delegator given a delegator address (e.g. terra10snjt8dmpr5my0h76xj48ty80uzwhraqalu4eg)")]),t._v("\nterracli query distr rewards "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("delegatorAddress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("For more commands, just type:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli query\n")])])]),e("p",[t._v("For each command, you can use the "),e("code",[t._v("-h")]),t._v(" or "),e("code",[t._v("--help")]),t._v(" flag to get more information.")]),t._v(" "),e("h2",{attrs:{id:"sending-transactions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-transactions"}},[t._v("#")]),t._v(" Sending Transactions")]),t._v(" "),e("p",[t._v("Other than querying blockchain data, "),e("code",[t._v("terracli")]),t._v(" is used to interact with the blockchain, sending transactions containing module messages with state-changing directives that get processed and included in blocks. All of transaction-sending operations follow the form:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("Please check each module subsection in the side menu to learn more about different types of transactions you can issue.")]),t._v(" "),e("h3",{attrs:{id:"simulating-a-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simulating-a-transaction"}},[t._v("#")]),t._v(" Simulating a transaction")]),t._v(" "),e("p",[t._v("You can simulate a transaction without actually broadcasting it by appending the "),e("code",[t._v("--dry-run")]),t._v(" flag to the command line:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx send "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("from_key_or_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("to_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("coins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --dry-run\n")])])]),e("h3",{attrs:{id:"generating-a-transaction-without-sending"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-transaction-without-sending"}},[t._v("#")]),t._v(" Generating a transaction without sending")]),t._v(" "),e("p",[t._v("Furthermore, you can build a transaction and print its JSON format to STDOUT by appending "),e("code",[t._v("--generate-only")]),t._v(" to the list of the command line arguments. This allows you to separate the creation and signing of a transaction with the broadcasting.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx send "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("from_key_or_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("to_address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("coins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --generate-only "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" unsignedSendTx.json\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx sign "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    unsignedSendTx.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" signedSendTx.json\n")])])]),e("p",[t._v("You can validate the transaction's signatures by typing the following:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx sign --validate-signatures signedSendTx.json\n")])])]),e("p",[t._v("You can broadcast the signed transaction to a node by providing the JSON file to the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx broadcast --node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" signedSendTx.json\n")])])]),e("h3",{attrs:{id:"about-fees"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#about-fees"}},[t._v("#")]),t._v(" About Fees")]),t._v(" "),e("p",[t._v("Transactions on the Terra Protocol network need to include a transaction fee in order to be processed. This fee pays for the gas required to run the transaction. The formula is the following:")]),t._v(" "),e("p"),e("p",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[e("svg",{staticStyle:{"vertical-align":"-0.464ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23.466ex",height:"2.059ex",viewBox:"0 -705 10372 910"}},[e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("path",{attrs:{"data-c":"66",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(550, 0)"}},[e("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(1016, 0)"}},[e("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(1482, 0)"}},[e("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(2228.8, 0)"}},[e("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(3284.6, 0)"}},[e("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(3761.6, 0)"}},[e("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(4290.6, 0)"}},[e("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})]),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(4981.8, 0)"}},[e("path",{attrs:{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(5982, 0)"}},[e("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(6459, 0)"}},[e("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(6988, 0)"}},[e("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(7457, 0)"}},[e("path",{attrs:{"data-c":"50",d:"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(8208, 0)"}},[e("path",{attrs:{"data-c":"72",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(8659, 0)"}},[e("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(9004, 0)"}},[e("path",{attrs:{"data-c":"63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(9437, 0)"}},[e("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(9903, 0)"}},[e("path",{attrs:{"data-c":"73",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})])])])])])],1),e("p"),t._v(" "),e("p",[t._v("The "),e("code",[t._v("gas")]),t._v(" is dependent on the transaction. Different transaction require different amount of "),e("code",[t._v("gas")]),t._v(". The "),e("code",[t._v("gas")]),t._v(" amount for a transaction is calculated as it is being processed, but there is a way to estimate it beforehand by using the "),e("code",[t._v("auto")]),t._v(" value for the "),e("code",[t._v("gas")]),t._v(" flag. Of course, this only gives an estimate. You can adjust this estimate with the flag "),e("code",[t._v("--gas-adjustment")]),t._v(" (default "),e("code",[t._v("1.0")]),t._v(") if you want to be sure you provide enough "),e("code",[t._v("gas")]),t._v(" for the transaction.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("gasPrice")]),t._v(" is the price of each unit of "),e("code",[t._v("gas")]),t._v(". Each validator sets a "),e("code",[t._v("min-gas-price")]),t._v(" value, and will only include transactions that have a "),e("code",[t._v("gasPrice")]),t._v(" greater than their "),e("code",[t._v("min-gas-price")]),t._v(".")]),t._v(" "),e("p",[t._v("The transaction "),e("code",[t._v("fees")]),t._v(" are the product of "),e("code",[t._v("gas")]),t._v(" and "),e("code",[t._v("gasPrice")]),t._v(". As a user, you have to input 2 out of 3. The higher the "),e("code",[t._v("gasPrice")]),t._v("/"),e("code",[t._v("fees")]),t._v(", the higher the chance that your transaction will get included in a block.")]),t._v(" "),e("h3",{attrs:{id:"setting-fees"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-fees"}},[t._v("#")]),t._v(" Setting Fees")]),t._v(" "),e("p",[t._v("Each transaction may either supply fees or gas prices, but not both. Most users will typically provide fees as this is the final cost you will end up incurring for the transaction being included in the ledger, where as gas prices will be dynamically calculated depending on the validator.")]),t._v(" "),e("p",[t._v("Validators specify a minimum gas price that they use to determine whether to include a transaction, which they calculate during "),e("code",[t._v("CheckTx")]),t._v(", where "),e("code",[t._v("gasPrices >= minGasPrices")]),t._v(". Note, your transaction must supply fees that are greater than or equal to "),e("strong",[t._v("any")]),t._v(" of the denominations the validator requires.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Validators may start to prioritize transactions by "),e("code",[t._v("gasPrice")]),t._v(" in the mempool, so providing higher fees or gas prices will likely yield higher priority of inclusion in a block.")])]),t._v(" "),e("p",[t._v("To directly use fees:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx send "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". --fees"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("100000uluna\n")])])]),e("p",[t._v("If you use fees, validators will calculate the implied "),e("code",[t._v("minGasPrices")]),t._v(" by dividing your fee with the estimated gas consumption, to properly assign the right priority to your transaction.")]),t._v(" "),e("p",[t._v("To use gas prices (use a comma-separated list of amount and denominations).")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx send "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". --gas-prices"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".03uluna,0.015ukrw\n")])])]),e("h3",{attrs:{id:"taxes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taxes"}},[t._v("#")]),t._v(" Taxes")]),t._v(" "),e("p",[t._v("Taxes in Terra must be included in the fee amount. Users can make transactions with existing methods without the "),e("code",[t._v("--fees")]),t._v(" flag but with gas prices flag. This will automatically calculate the tax and return fees in addition to the existing gas fees.")]),t._v(" "),e("h3",{attrs:{id:"automatic-fee-estimation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-fee-estimation"}},[t._v("#")]),t._v(" Automatic Fee Estimation")]),t._v(" "),e("p",[t._v("You may want to cap the maximum gas that can be consumed by the transaction via the "),e("code",[t._v("--gas")]),t._v(" flag. If you pass "),e("code",[t._v("--gas=auto")]),t._v(", the gas will be automatically estimated before executing the transaction.")]),t._v(" "),e("p",[t._v("Gas estimate might be inaccurate as state changes could occur in between the end of the simulation and the actual execution of a transaction, thus an adjustment is applied on top of the original estimate in order to ensure the transaction is broadcasted successfully.")]),t._v(" "),e("p",[t._v("The adjustment can be controlled via the "),e("code",[t._v("--gas-adjustment")]),t._v(" flag, whose default value is 1.0.")]),t._v(" "),e("p",[t._v("To get a direct fee estimation from "),e("code",[t._v("terracli")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx estimate-fee "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --gas-prices"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".015uluna\n    --gas-adjustment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),t._v("\n")])])]),e("p",[t._v("To create and send transactions using fee-estimation, use the template below as a format:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terracli tx send "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --gas-prices"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".015uluna\n    --gas"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto\n    --gas-adjustment"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),t._v("\n")])])]),e("h2",{attrs:{id:"shell-autocompletion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-autocompletion"}},[t._v("#")]),t._v(" Shell Autocompletion")]),t._v(" "),e("p",[t._v("Auto-completion scripts for popular UNIX shell interpreters such as "),e("code",[t._v("bash")]),t._v(" and "),e("code",[t._v("zsh")]),t._v(" can be generated through the "),e("code",[t._v("completion")]),t._v(" command, which is available for both "),e("code",[t._v("terrad")]),t._v(" and "),e("code",[t._v("terracli")]),t._v(". This allows for a more convenient way to interact with the Terra Core endpoints when using the command-line.")]),t._v(" "),e("p",[t._v("If you want to generate "),e("code",[t._v("bash")]),t._v(" completion scripts run the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terrad completion "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" terrad_completion\nterracli completion "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" terracli_completion\n")])])]),e("p",[t._v("If you want to generate "),e("code",[t._v("zsh")]),t._v(" completion scripts run the following command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("terrad completion --zsh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" terrad_completion\nterracli completion --zsh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" terracli_completion\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("On most UNIX systems, such scripts may be loaded in "),e("code",[t._v(".bashrc")]),t._v(" or "),e("code",[t._v(".bash_profile")]),t._v(" to enable Bash autocompletion.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. terrad_completion'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bashrc\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'. terracli_completion'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bashrc\n")])])]),e("p",[t._v("Refer to the user's manual of your interpreter provided by your operating system for information on how to enable shell autocompletion.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);