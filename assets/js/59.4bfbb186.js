(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{435:function(e,t,a){"use strict";a.r(t);var o=a(5),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),a("p",[e._v("Validators are network participants that, in addition to running a full node, listen to transactions broadcasted in the network's mempool and include them in blocks that they sign. For more details on validators, check the "),a("RouterLink",{attrs:{to:"/validator/faq.html"}},[e._v("validator FAQ")]),e._v(".")],1),e._v(" "),a("p",[e._v("In order to do so and reliably to meet the scalability, security, and finality requirements of the Terra network, they typically run specially configured architectures that are robust against many forms of attacks on distributed networks.")]),e._v(" "),a("p",[e._v("Validators play a central role in the Terra blockchain's consensus, which is based on Tendermint BFT. For more detailed information on Tendermint, please check their official "),a("a",{attrs:{href:"https://docs.tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"delegations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegations"}},[e._v("#")]),e._v(" Delegations")]),e._v(" "),a("p",[e._v("In Terra's consensus model, Luna holders do not stake their tokens directly, but "),a("strong",[e._v("delegate")]),e._v(" their Luna to a validator. This allows normal Luna holders who don't want to set up a validator node can participate in staking rewards.")]),e._v(" "),a("p",[e._v("A validator's "),a("strong",[e._v("voting power")]),e._v(" is proportional to the amount of Luna they have bonded, from all delegations (including their self-delegation). Only the "),a("strong",[e._v("top 100")]),e._v(" validators in voting power (and bonded Luna, by corollary) comprise the validating set, referred to hereon as "),a("strong",[e._v("delegates")]),e._v(". Delegators play a vital role in this ecosystem because they determine which validators receive this designation, voting by delegating their Luna.")]),e._v(" "),a("h3",{attrs:{id:"slashing-risks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing-risks"}},[e._v("#")]),e._v(" Slashing Risks")]),e._v(" "),a("p",[e._v("Running validator is a big responsibility, which is why only the top 100 in bonded Luna stake are elected to sign blocks. As such, safety and liveness guarantees must be met, at the risk of having their validator's stake slashed (penalized), hurting both the validator's funds (as well as their delegator's), and their reputation.")]),e._v(" "),a("p",[e._v("The major slashing conditions are:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("double signing")]),e._v(": a validator signed two different blocks with the same chain ID at the same height")]),e._v(" "),a("li",[a("strong",[e._v("downtime")]),e._v(": a validator was non-responsive / couldn't be reached for more than an amount of time")]),e._v(" "),a("li",[a("strong",[e._v("too many missed oracle votes")]),e._v(": a validator failed to report a threshold amount of votes that lie within the weighted median in the exchange rate oracle")])]),e._v(" "),a("p",[e._v("Other validators are always on the lookout for misbehaving validator nodes, and can submit "),a("strong",[e._v("evidence")]),e._v(" of a punishable infraction. Once discovered, the misbehaving validator node will have a small portion of their funds slashed and "),a("strong",[e._v("jailed")]),e._v(" (excluded from the validator set for an amount of time) in order to protect delegator funds and fix the offending issues.")]),e._v(" "),a("p",[e._v("For delegators, staking Luna can be a rewarding activity. However, as explained above, it should not be treated as a passive activity -- they should apply due diligence and have confidence in the validator's architecture to not get slashed.")])])}),[],!1,null,null,null);t.default=n.exports}}]);