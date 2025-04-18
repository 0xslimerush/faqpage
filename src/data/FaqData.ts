import type { FaqData } from "../types/types";

export const faqData: FaqData = {
  FaqData: [
    {
      question: "What is Fareplay?",
      answer: {
        info: "Fareplay is revolutionizing online gaming by creating the world's first truly decentralized casino platform. Here's what makes us unique:",
        features: [
          {
            list_item:
              "Smart Contract Gaming: Every game operates through transparent, audited smart contracts",
            list_item_2:
              "No House Advantage: Unlike traditional casinos, we don't maintain a treasury or hold player funds",
            list_item_3: [
              {
                title: "Innovative Tokenomics: Our FARE token system:",
                bullet_item: "Mints tokens when players win",
                bullet_item_2: "Burns tokens when players lose",
                bullet_item_3: "Creates a naturally deflationary economy",
              },
            ],
            list_item_4: [
              {
                title: "Fair Play Guarantee:",
                bullet_item: "All randomness is verified by Chainlink",
                bullet_item_2: "Complete transparency in odds and outcomes",
                bullet_item_3: "No hidden fees or manipulated results",
              },
            ],
            list_item_5: [
              {
                title: "Community Focused:",
                bullet_item: "Anyone can become a casino host",
                bullet_item_2: "Players maintain full control of their funds",
                bullet_item_3:
                  "Regular updates and new games based on community feedback",
              },
            ],
          },
        ],
        bottom_info:
          "Fareplay combines the excitement of casino gaming with the security and transparency of blockchain technology.",
      },
    },
    {
      question: "What is Privy and how does Fareplay use it?",
      answer: {
        info: "Privy is our secure wallet solution that makes getting started with Fareplay incredibly simple. Instead of dealing with complicated crypto wallets, you can sign in with familiar methods like Google, Discord, or email.",
        info_2:
          "Once you sign up, Privy automatically creates a secure web3 wallet for you - no seed phrases or technical knowledge required. This wallet is specifically designed for Fareplay, allowing you to deposit funds and start playing games immediately.",
        info_3:
          "Think of it as your personal gaming account that combines the security of blockchain with the simplicity of traditional login methods.",
      },
    },
    {
      question: "Why does Fareplay use Privy?",
      answer: {
        info: "We chose Privy because it solves the biggest challenge in web3 gaming: complexity. Traditional crypto wallets can be intimidating and risky for new users. With Privy, you get three major benefits:",
        features: [
          {
            list_item: "Simple social login that feels familiar",
            list_item_2:
              "A secure wallet that's automatically created and managed for you",
            list_item_3:
              "Complete ownership of your funds - Fareplay never holds your money, it stays in your Privy wallet that only you control. This approach combines the best of web2 convenience with web3 security, making it easier for anyone to start playing without compromising on safety or control.",
          },
        ],
      },
    },
    {
      question: "What networks does Fareplay support for funding my account?",
      answer: {
        info: "Fareplay exclusively operates on Arbitrum, a layer-2 network known for its fast transactions and low fees. To fund your account, you'll need to send USDC on the Arbitrum network to your Privy wallet address. If you're new to Arbitrum, you can get started in two ways:",
        features: [
          {
            list_item:
              "Purchase USDC directly through our integrated MoonPay service using your credit card",
            list_item_2:
              " Transfer USDC from an exchange that supports Arbitrum withdrawals (like Coinbase or Binance). Remember to always select 'Arbitrum network' when sending funds to avoid any loss of assets.",
          },
        ],
      },
    },
    {
      question: "How do I find my wallet address in Privy?",
      answer: {
        info: "After signing up and completing the onboarding process, click the 'Add Funds' button in your account dashboard. This will open a modal showing your unique Privy wallet address.",
        info_2:
          "You can easily copy this address to send funds from an exchange or another wallet. The address will always start with '0x' and is specific to your account on the Arbitrum network.",
        info_3:
          "Pro tip: Always double-check the address when copying to ensure accurate transfers.",
      },
    },
    {
      question:
        "Are there any fees associated with using Privy or playing on Fareplay?",
      answer: {
        info: "Fareplay maintains a transparent fee structure:",
        features: [
          {
            list_item:
              "A 1% edge on all games executed through the Farevault - this is significantly lower than traditional casinos which often charge 3-5%.",
            list_item_2:
              "A small fee paid to Chainlink (approximately $0.02) for providing verified randomness, ensuring completely fair and transparent gameplay.",
            list_item_3:
              "Network gas fees on Arbitrum for processing transactions - these are typically very low, around a few cents. There are no hidden fees, account maintenance charges, or withdrawal fees from Fareplay itself. All fees are transparently shown before you confirm any game or transaction.",
          },
        ],
      },
    },
    {
      question: "Is there a minimum amount of FARE I need to play?",
      answer: {
        info: "While there's no strict minimum requirement to play, we recommend considering the economics of each bet carefully.",
        info_2:
          "Each game requires approximately $0.02 worth of FARE to cover Chainlink's randomness verification fee. For example, if you're betting $1, that $0.02 fee represents 2% of your bet, which can impact your expected returns.",
        info_3:
          "For optimal playing experience, we recommend starting with at least $10-20 worth of FARE to ensure the verification fees don't significantly impact your gaming experience.",
        info_4:
          "Remember, you can always start small and add more funds as you get comfortable with the platform.",
      },
    },
    {
      question: "Where can I buy FARE tokens?",
      answer: {
        info: "FARE tokens can be purchased directly on Uniswap, the leading decentralized exchange. Here's how to buy:",
        features: [
          {
            list_item:
              "Visit Uniswap: https://app.uniswap.org/explore/tokens/arbitrum/0xfa4e888d9fbbcf4afa7bf057ecfe59ed04619e62",
            list_item_2:
              "Connect your wallet and ensure you're on the Arbitrum network",
            list_item_3:
              "The FARE token contract address is: 0xFA4E888d9fBBcF4AfA7BF057ECfe59Ed04619e62",
            list_item_4:
              "Swap any supported token (USDC recommended) for FARE.",
          },
        ],
        bottom_info:
          "Always verify the contract address matches to avoid scams. The official FARE token will show verified status on Uniswap.",
      },
    },
    {
      question: "How do I withdraw my winnings from Fareplay?",
      answer: {
        info: "Withdrawing your winnings is straightforward and fully under your control through your Privy wallet. You have several options:",
        features: [
          {
            list_item:
              "Send your FARE directly to a supported exchange for conversion to other cryptocurrencies or fiat",
            list_item_2:
              "Use Uniswap to swap FARE for other tokens on Arbitrum",
            list_item_3:
              "Hold your FARE tokens in your Privy wallet for future games or potential appreciation. To withdraw, simply click the 'Withdraw' button in your account dashboard, enter the destination address, and confirm the transaction.",
          },
        ],
        bottom_info:
          "Always verify the receiving address and network (Arbitrum) before confirming any withdrawal.",
      },
    },
    {
      question: "What if I have problems funding my account?",
      answer: {
        info: "Our support team, led by Rush, is dedicated to helping you resolve any funding issues quickly.",
        info_2:
          "Join our Discord server (discord.gg/fareplay) and create a ticket in the #support channel. Tag Rush (@rush) in your message, and don't hesitate to be persistent - we want to ensure you get help quickly!",
        info_3:
          "Common issues we can help with include: transaction delays, network configuration, exchange withdrawals, and general wallet questions. We typically respond within minutes during peak hours.",
      },
    },
    {
      question: "How can I build my own casino?",
      answer: {
        info: "Welcome to the future of online gaming! Fareplay Protocol is revolutionizing the casino industry by becoming the 'Shopify of Casinos' - the most affordable and accessible way to launch your own online casino with instant liquidity.",
        info_2: "Our No-Code Casino Platform allows anyone to:",
        features: [
          {
            list_item: [
              {
                title: "Launch Without Technical Knowledge:",
                bullet_item: "Zero coding required",
                bullet_item_2: "No blockchain expertise needed",
                bullet_item_3: "Instant setup with our drag-and-drop builder",
                bullet_item_4: "Custom branding and theme options",
              },
            ],
            list_item_2: [
              {
                title: "Access Immediate Liquidity:",
                bullet_item: "Tap into Fareplay's shared liquidity pool",
                bullet_item_2: "No upfront capital requirements",
                bullet_item_3: "Instant payouts for your players",
              },
            ],
            list_item_3: [
              {
                title: "Benefit from Industry-Leading Economics:",
                bullet_item: "Lowest deployment costs in the industry",
                bullet_item_2: "Minimal operational overhead",
                bullet_item_3: "Competitive revenue sharing model",
                bullet_item_4: "Built-in player acquisition tools",
              },
            ],
            list_item_4: [
              {
                title: "Get Started Immediately:",
                bullet_item: "Simple social media integration",
                bullet_item_2:
                  "Embed games directly in your existing platforms",
                bullet_item_3: "Mobile-first design",
                bullet_item_4: "Multi-platform support",
              },
            ],
            list_item_5: [
              {
                title: "Future Expansion Features:",
                bullet_item: "Custom game creation tools",
                bullet_item_2: "Advanced analytics dashboard",
                bullet_item_3: "Player management system",
                bullet_item_4: "Marketing automation tools",
              },
            ],
          },
        ],
      },
    },
  ],
};
