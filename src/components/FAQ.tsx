import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Fareplay?",
    answer: "Fareplay is revolutionizing online gaming by creating the world's first truly decentralized casino platform. Here's what makes us unique:\n\n1) Smart Contract Gaming: Every game operates through transparent, audited smart contracts\n\n2) No House Advantage: Unlike traditional casinos, we don't maintain a treasury or hold player funds\n\n3) Innovative Tokenomics: Our FARE token system:\n- Mints tokens when players win\n- Burns tokens when players lose\n- Creates a naturally deflationary economy\n\n4) Fair Play Guarantee:\n- All randomness is verified by Chainlink\n- Complete transparency in odds and outcomes\n- No hidden fees or manipulated results\n\n5) Community Focused:\n- Anyone can become a casino host\n- Players maintain full control of their funds\n- Regular updates and new games based on community feedback\n\nFareplay combines the excitement of casino gaming with the security and transparency of blockchain technology."
  },
  {
    question: "What is Privy and how does Fareplay use it?",
    answer: "Privy is our secure wallet solution that makes getting started with Fareplay incredibly simple. Instead of dealing with complicated crypto wallets, you can sign in with familiar methods like Google, Discord, or email. Once you sign up, Privy automatically creates a secure web3 wallet for you - no seed phrases or technical knowledge required. This wallet is specifically designed for Fareplay, allowing you to deposit funds and start playing games immediately. Think of it as your personal gaming account that combines the security of blockchain with the simplicity of traditional login methods."
  },
  {
    question: "Why does Fareplay use Privy?",
    answer: "We chose Privy because it solves the biggest challenge in web3 gaming: complexity. Traditional crypto wallets can be intimidating and risky for new users. With Privy, you get three major benefits: 1) Simple social login that feels familiar, 2) A secure wallet that's automatically created and managed for you, and 3) Complete ownership of your funds - Fareplay never holds your money, it stays in your Privy wallet that only you control. This approach combines the best of web2 convenience with web3 security, making it easier for anyone to start playing without compromising on safety or control."
  },
  {
    question: "What networks does Fareplay support for funding my account?",
    answer: "Fareplay exclusively operates on Arbitrum, a layer-2 network known for its fast transactions and low fees. To fund your account, you'll need to send USDC on the Arbitrum network to your Privy wallet address. If you're new to Arbitrum, you can get started in two ways: 1) Purchase USDC directly through our integrated MoonPay service using your credit card, or 2) Transfer USDC from an exchange that supports Arbitrum withdrawals (like Coinbase or Binance). Remember to always select 'Arbitrum network' when sending funds to avoid any loss of assets."
  },
  {
    question: "How do I find my wallet address in Privy?",
    answer: "After signing up and completing the onboarding process, click the 'Add Funds' button in your account dashboard. This will open a modal showing your unique Privy wallet address. You can easily copy this address to send funds from an exchange or another wallet. The address will always start with '0x' and is specific to your account on the Arbitrum network. Pro tip: Always double-check the address when copying to ensure accurate transfers."
  },
  {
    question: "Are there any fees associated with using Privy or playing on Fareplay?",
    answer: "Fareplay maintains a transparent fee structure: 1) A 1% edge on all games executed through the Farevault - this is significantly lower than traditional casinos which often charge 3-5%. 2) A small fee paid to Chainlink (approximately $0.02) for providing verified randomness, ensuring completely fair and transparent gameplay. 3) Network gas fees on Arbitrum for processing transactions - these are typically very low, around a few cents. There are no hidden fees, account maintenance charges, or withdrawal fees from Fareplay itself. All fees are transparently shown before you confirm any game or transaction."
  },
  {
    question: "Is there a minimum amount of FARE I need to play?",
    answer: "While there's no strict minimum requirement to play, we recommend considering the economics of each bet carefully. Each game requires approximately $0.02 worth of FARE to cover Chainlink's randomness verification fee. For example, if you're betting $1, that $0.02 fee represents 2% of your bet, which can impact your expected returns. For optimal playing experience, we recommend starting with at least $10-20 worth of FARE to ensure the verification fees don't significantly impact your gaming experience. Remember, you can always start small and add more funds as you get comfortable with the platform."
  },
  {
    question: "Where can I buy FARE tokens?",
    answer: "FARE tokens can be purchased directly on Uniswap, the leading decentralized exchange. Here's how to buy:\n\n1) Visit Uniswap: https://app.uniswap.org/explore/tokens/arbitrum/0xfa4e888d9fbbcf4afa7bf057ecfe59ed04619e62\n\n2) Connect your wallet and ensure you're on the Arbitrum network\n\n3) The FARE token contract address is: 0xFA4E888d9fBBcF4AfA7BF057ECfe59Ed04619e62\n\n4) Swap any supported token (USDC recommended) for FARE\n\nAlways verify the contract address matches to avoid scams. The official FARE token will show verified status on Uniswap."
  },
  {
    question: "How do I withdraw my winnings from Fareplay?",
    answer: "Withdrawing your winnings is straightforward and fully under your control through your Privy wallet. You have several options: 1) Send your FARE directly to a supported exchange for conversion to other cryptocurrencies or fiat, 2) Use Uniswap to swap FARE for other tokens on Arbitrum, or 3) Hold your FARE tokens in your Privy wallet for future games or potential appreciation. To withdraw, simply click the 'Withdraw' button in your account dashboard, enter the destination address, and confirm the transaction. Always verify the receiving address and network (Arbitrum) before confirming any withdrawal."
  },
  {
    question: "What if I have problems funding my account?",
    answer: "Our support team, led by Rush, is dedicated to helping you resolve any funding issues quickly. Join our Discord server (discord.gg/fareplay) and create a ticket in the #support channel. Tag Rush (@rush) in your message, and don't hesitate to be persistent - we want to ensure you get help quickly! Common issues we can help with include: transaction delays, network configuration, exchange withdrawals, and general wallet questions. We typically respond within minutes during peak hours."
  },
  {
    question: "How can I build my own casino?",
    answer: "Welcome to the future of online gaming! Fareplay Protocol is revolutionizing the casino industry by becoming the 'Shopify of Casinos' - the most affordable and accessible way to launch your own online casino with instant liquidity.\n\nOur No-Code Casino Platform allows anyone to:\n\n1) Launch Without Technical Knowledge:\n- Zero coding required\n- No blockchain expertise needed\n- Instant setup with our drag-and-drop builder\n- Custom branding and theme options\n\n2) Access Immediate Liquidity:\n- Tap into Fareplay's shared liquidity pool\n- No upfront capital requirements\n- Instant payouts for your players\n\n3) Benefit from Industry-Leading Economics:\n- Lowest deployment costs in the industry\n- Minimal operational overhead\n- Competitive revenue sharing model\n- Built-in player acquisition tools\n\n4) Get Started Immediately:\n- Simple social media integration\n- Embed games directly in your existing platforms\n- Mobile-first design\n- Multi-platform support\n\n5) Future Expansion Features:\n- Custom game creation tools\n- Advanced analytics dashboard\n- Player management system\n- Marketing automation tools "
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-800 rounded-lg overflow-hidden bg-[#13141A] transition-all duration-300 hover:border-[#FF3366]"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#FF3366] transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-6 transition-all duration-300 ease-in-out ${
              openIndex === index ? 'py-4' : 'max-h-0'
            } overflow-hidden`}
          >
            <p className="text-gray-400 whitespace-pre-line">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;