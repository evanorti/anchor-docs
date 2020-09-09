(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{398:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"slashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[t._v("#")]),t._v(" Slashing")]),t._v(" "),a("p",[t._v('The Slashing module enables Terra to disincentivize any attributable action by a protocol-recognized actor with value at stake by penalizing them ("slashing"). Terra mainly uses the '),a("RouterLink",{attrs:{to:"/dev/spec-staking.html"}},[a("code",[t._v("Staking")])]),t._v(" module to slash when violating validator responsibilities (such as missing too many "),a("code",[t._v("VotePeriod")]),t._v("s in the exchange rate oracle). This module deals with lower-level penalties at the Tendermint consensus level, such as double-signing.")],1),t._v(" "),a("h2",{attrs:{id:"message-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[t._v("#")]),t._v(" Message Types")]),t._v(" "),a("h3",{attrs:{id:"msgunjail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msgunjail"}},[t._v("#")]),t._v(" MsgUnjail")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgUnjail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ValidatorAddr sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"address" yaml:"address"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// address of the validator operator")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("JSON Example")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cosmos/MsgUnjail"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terravaloper..."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"transitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[t._v("#")]),t._v(" Transitions")]),t._v(" "),a("h3",{attrs:{id:"begin-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[t._v("#")]),t._v(" Begin-Block")]),t._v(" "),a("blockquote",[a("p",[t._v("This section was taken from the official Cosmos SDK docs, and placed here for your convenience to understand the Slashing module's parameters.")])]),t._v(" "),a("p",[t._v("At the beginning of each block, the Slashing module checks for evidence of infractions or downtime of validators, as well as double-signing and other low-level consensus penalties.")]),t._v(" "),a("h4",{attrs:{id:"evidence-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evidence-handling"}},[t._v("#")]),t._v(" Evidence Handling")]),t._v(" "),a("p",[t._v("Tendermint blocks can include evidence, which indicates that a validator committed malicious\nbehavior. The relevant information is forwarded to the application as ABCI Evidence\nin "),a("code",[t._v("abci.RequestBeginBlock")]),t._v(" so that the validator an be accordingly punished.")]),t._v(" "),a("p",[t._v("For some "),a("code",[t._v("Evidence")]),t._v(" submitted in "),a("code",[t._v("block")]),t._v(" to be valid, it must satisfy:")]),t._v(" "),a("p",[a("code",[t._v("Evidence.Timestamp >= block.Timestamp - MaxEvidenceAge")])]),t._v(" "),a("p",[t._v("Where "),a("code",[t._v("Evidence.Timestamp")]),t._v(" is the timestamp in the block at height\n"),a("code",[t._v("Evidence.Height")]),t._v(" and "),a("code",[t._v("block.Timestamp")]),t._v(" is the current block timestamp.")]),t._v(" "),a("p",[t._v("If valid evidence is included in a block, the validator's stake is reduced by\nsome penalty ("),a("code",[t._v("SlashFractionDoubleSign")]),t._v(' for equivocation) of what their stake was\nwhen the infraction occurred (rather than when the evidence was discovered). We\nwant to "follow the stake", i.e. the stake which contributed to the infraction\nshould be slashed, even if it has since been redelegated or started unbonding.')]),t._v(" "),a("p",[t._v("We first need to loop through the unbondings and redelegations from the slashed\nvalidator and track how much stake has since moved:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("slashAmountUnbondings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nslashAmountRedelegations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\nunbondings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUnbondings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" unbond in unbondings "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" was not bonded before evidence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height or started unbonding before unbonding period ago "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    burn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" unbond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitialTokens "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" SLASH_PROPORTION\n    slashAmountUnbondings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" burn\n\n    unbond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tokens "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unbond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tokens "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" burn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// only care if source gets slashed because we're already bonded to destination")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// so if destination validator gets slashed our delegation just has same shares")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// of smaller pool.")]),t._v("\nredels "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRedelegationsBySource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" redel in redels "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" was not bonded before evidence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height or started redelegating before unbonding period ago "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    burn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" redel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitialTokens "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" SLASH_PROPORTION\n    slashAmountRedelegations "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" burn\n\n    amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unbondFromValidator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("redel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" burn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("We then slash the validator and tombstone them:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curVal := validator\noldVal := loadValidator(evidence.Height, evidence.Address)\n\nslashAmount := SLASH_PROPORTION * oldVal.Shares\nslashAmount -= slashAmountUnbondings\nslashAmount -= slashAmountRedelegations\n\ncurVal.Shares = max(0, curVal.Shares - slashAmount)\n\nsignInfo = SigningInfo.Get(val.Address)\nsignInfo.JailedUntil = MAX_TIME\nsignInfo.Tombstoned = true\nSigningInfo.Set(val.Address, signInfo)\n")])])]),a("p",[t._v("This ensures that offending validators are punished the same amount whether they\nact as a single validator with X stake or as N validators with collectively X\nstake. The amount slashed for all double signature infractions committed within a\nsingle slashing period is capped as described "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.37.4/docs/spec/slashing/01_concepts.md#tombstone-caps",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"liveness-tracking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liveness-tracking"}},[t._v("#")]),t._v(" Liveness Tracking")]),t._v(" "),a("p",[t._v("At the beginning of each block, we update the "),a("code",[t._v("ValidatorSigningInfo")]),t._v(" for each\nvalidator and check if they've crossed below the liveness threshold over a\nsliding window. This sliding window is defined by "),a("code",[t._v("SignedBlocksWindow")]),t._v(" and the\nindex in this window is determined by "),a("code",[t._v("IndexOffset")]),t._v(" found in the validator's\n"),a("code",[t._v("ValidatorSigningInfo")]),t._v(". For each block processed, the "),a("code",[t._v("IndexOffset")]),t._v(" is incrimented\nregardless if the validator signed or not. Once the index is determined, the\n"),a("code",[t._v("MissedBlocksBitArray")]),t._v(" and "),a("code",[t._v("MissedBlocksCounter")]),t._v(" are updated accordingly.")]),t._v(" "),a("p",[t._v("Finally, in order to determine if a validator crosses below the liveness threshold,\nwe fetch the maximum number of blocks missed, "),a("code",[t._v("maxMissed")]),t._v(", which is\n"),a("code",[t._v("SignedBlocksWindow - (MinSignedPerWindow * SignedBlocksWindow)")]),t._v(" and the minimum\nheight at which we can determine liveness, "),a("code",[t._v("minHeight")]),t._v(". If the current block is\ngreater than "),a("code",[t._v("minHeight")]),t._v(" and the validator's "),a("code",[t._v("MissedBlocksCounter")]),t._v(" is greater than\n"),a("code",[t._v("maxMissed")]),t._v(", they will be slashed by "),a("code",[t._v("SlashFractionDowntime")]),t._v(", will be jailed\nfor "),a("code",[t._v("DowntimeJailDuration")]),t._v(", and have the following values reset:\n"),a("code",[t._v("MissedBlocksBitArray")]),t._v(", "),a("code",[t._v("MissedBlocksCounter")]),t._v(", and "),a("code",[t._v("IndexOffset")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": Liveness slashes do "),a("strong",[t._v("NOT")]),t._v(" lead to a tombstombing.")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" vote in block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastCommitInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Votes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  signInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetValidatorSigningInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is a relative index, so we counts blocks the validator SHOULD have")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// signed. We use the 0-value default signing info if not present, except for")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start height.")]),t._v("\n  index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IndexOffset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignedBlocksWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IndexOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update MissedBlocksBitArray and MissedBlocksCounter. The MissedBlocksCounter")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// just tracks the sum of MissedBlocksBitArray. That way we avoid needing to")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// read/write the whole array each time.")]),t._v("\n  missedPrevious "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetValidatorMissedBlockBitArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  missed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("signed\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("missedPrevious "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" missed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array index has changed from not missed to missed, increment counter")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetValidatorMissedBlockBitArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" missedPrevious "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("missed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array index has changed from missed to not missed, decrement counter")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetValidatorMissedBlockBitArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array index at this index has not changed; no need to update counter")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" missed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// emit events...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  minHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StartHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignedBlocksWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  maxMissed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignedBlocksWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MinSignedPerWindow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If we are past the minimum height and the validator has missed too many")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// jail and slash them.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" minHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maxMissed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    validator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidatorByConsAddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// emit events...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We need to retrieve the stake distribution which signed the block, so we")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// subtract ValidatorUpdateDelay from the block height, and subtract an")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// additional 1 since this is the LastCommit.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Note, that this CAN result in a negative "distributionHeight" up to')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -ValidatorUpdateDelay-1, i.e. at the end of the pre-genesis block (none) = at the beginning of the genesis block.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// That's fine since this is just used to filter unbonding delegations & redelegations.")]),t._v("\n    distributionHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidatorUpdateDelay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Slash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distributionHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Power"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SlashFractionDowntime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Jail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JailedUntil "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DowntimeJailDuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We need to reset the counter & array so that the validator won't be")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// immediately slashed for downtime upon rebonding.")]),t._v("\n    signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MissedBlocksCounter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IndexOffset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ClearValidatorMissedBlockBitArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetValidatorSigningInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("The subspace for the Slashing module is "),a("code",[t._v("slashing")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Params "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaxEvidenceAge          time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"max_evidence_age" yaml:"max_evidence_age"`')]),t._v("\n\tSignedBlocksWindow      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"signed_blocks_window" yaml:"signed_blocks_window"`')]),t._v("\n\tMinSignedPerWindow      sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"min_signed_per_window" yaml:"min_signed_per_window"`')]),t._v("\n\tDowntimeJailDuration    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Duration "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"downtime_jail_duration" yaml:"downtime_jail_duration"`')]),t._v("\n\tSlashFractionDoubleSign sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"slash_fraction_double_sign" yaml:"slash_fraction_double_sign"`')]),t._v("\n\tSlashFractionDowntime   sdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"slash_fraction_downtime" yaml:"slash_fraction_downtime"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"maxevidenceage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxevidenceage"}},[t._v("#")]),t._v(" MaxEvidenceAge")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("time.Duration")]),t._v(" (seconds)")]),t._v(" "),a("li",[t._v("default: 2 minutes")])]),t._v(" "),a("h3",{attrs:{id:"signedblockswindow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signedblockswindow"}},[t._v("#")]),t._v(" SignedBlocksWindow")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("int64")])]),t._v(" "),a("li",[t._v("default: "),a("code",[t._v("100")])])]),t._v(" "),a("h3",{attrs:{id:"minsignedperwindow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minsignedperwindow"}},[t._v("#")]),t._v(" MinSignedPerWindow")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("Dec")])]),t._v(" "),a("li",[t._v("default: "),a("code",[t._v("5")])])]),t._v(" "),a("h3",{attrs:{id:"downtimejailduration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downtimejailduration"}},[t._v("#")]),t._v(" DowntimeJailDuration")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("time.Duration")]),t._v(" (seconds)")]),t._v(" "),a("li",[t._v("default: 10 minutes")])]),t._v(" "),a("h3",{attrs:{id:"slashfractiondoublesign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondoublesign"}},[t._v("#")]),t._v(" SlashFractionDoubleSign")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("Dec")])]),t._v(" "),a("li",[t._v("default: 1/20")])]),t._v(" "),a("h3",{attrs:{id:"slashfractiondowntime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondowntime"}},[t._v("#")]),t._v(" SlashFractionDowntime")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("Dec")])]),t._v(" "),a("li",[t._v("default: 1/10000")])])])}),[],!1,null,null,null);s.default=e.exports}}]);