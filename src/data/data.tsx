import { SFAQAnswer } from "../styles/styled";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const faqData: FAQItem[] = [
  {
    question: "What is Fareplay?",
    answer: (
      <SFAQAnswer>
        <p>
          Fareplay is revolutionizing online gaming by creating the world's
          first truly decentralized casino platform. Here's what makes us
          unique:
        </p>
        <ol>
          <li>
            Smart Contract Gaming: Every game operates through transparent,
            audited smart contracts
          </li>
          <li>
            No House Advantage: Unlike traditional casinos, we don't maintain a
            treasury or hold player funds
          </li>
          <li>
            Innovative Tokenomics: Our FARE token system:
            <ul>
              <li>Mints tokens when players win</li>
              <li>Burns tokens when players lose</li>
              <li>Creates a naturally deflationary economy</li>
            </ul>
          </li>
          <li>
            Fair Play Guarantee:
            <ul>
              <li>All randomness is verified by Chainlink</li>
              <li>Complete transparency in odds and outcomes</li>
              <li>No hidden fees or manipulated results</li>
            </ul>
          </li>
          <li>
            Community Focused:
            <ul>
              <li>Anyone can become a casino host</li>
              <li>Players maintain full control of their funds</li>
              <li>Regular updates and new games based on community feedback</li>
              <li>
                Fareplay combines the excitement of casino gaming with the
                security and transparency of blockchain technology.
              </li>
            </ul>
          </li>
        </ol>
      </SFAQAnswer>
    ),
  },
  {
    question: "What is Privy and how does Fareplay use it?",
    answer: (
      <SFAQAnswer>
        <p>
          Privy is our secure wallet solution that makes getting started with
          Fareplay incredibly simple. Instead of dealing with complicated crypto
          wallets, you can sign in with familiar methods like Google, Discord,
          or email.
        </p>
        <p>
          Once you sign up, Privy automatically creates a secure web3 wallet for
          you - no seed phrases or technical knowledge required. This wallet is
          specifically designed for Fareplay, allowing you to deposit funds and
          start playing games immediately.
        </p>
        <p>
          Think of it as your personal gaming account that combines the security
          of blockchain with the simplicity of traditional login methods.
        </p>
      </SFAQAnswer>
    ),
  },
  {
    question: "Why does Fareplay use Privy?",
    answer: (
      <SFAQAnswer>
        <p>
          We chose Privy because it solves the biggest challenge in web3 gaming:
          complexity. Traditional crypto wallets can be intimidating and risky
          for new users. With Privy, you get three major benefits:
        </p>
        <ol>
          <li>Simple social login that feels familiar</li>
          <li>
            A secure wallet that's automatically created and managed for you
          </li>
          <li>
            Complete ownership of your funds - Fareplay never holds your money,
            it stays in your Privy wallet that only you control. This approach
            combines the best of web2 convenience with web3 security, making it
            easier for anyone to start playing without compromising on safety or
            control.
          </li>
        </ol>
      </SFAQAnswer>
    ),
  },
  {
    question: "What networks does Fareplay support for funding my account?",
    answer: (
      <SFAQAnswer>
        <p>
          Fareplay exclusively operates on Arbitrum, a layer-2 network known for
          its fast transactions and low fees. To fund your account, you'll need
          to send USDC on the Arbitrum network to your Privy wallet address. If
          you're new to Arbitrum, you can get started in two ways:
        </p>
        <ol>
          <li>
            Purchase USDC directly through our integrated MoonPay service using
            your credit card
          </li>
          <li>
            Transfer USDC from an exchange that supports Arbitrum withdrawals
            (like Coinbase or Binance). Remember to always select 'Arbitrum
            network' when sending funds to avoid any loss of assets.
          </li>
        </ol>
      </SFAQAnswer>
    ),
  },
  {
    question: "How do I find my wallet address in Privy?",
    answer: (
      <SFAQAnswer>
        <p>
          After signing up and completing the onboarding process, click the 'Add
          Funds' button in your account dashboard. This will open a modal
          showing your unique Privy wallet address.
        </p>
        <p>
          You can easily copy this address to send funds from an exchange or
          another wallet. The address will always start with '0x' and is
          specific to your account on the Arbitrum network.
        </p>
        <p>
          Pro tip: Always double-check the address when copying to ensure
          accurate transfers.
        </p>
      </SFAQAnswer>
    ),
  },
  {
    question:
      "Are there any fees associated with using Privy or playing on Fareplay?",
    answer: (
      <SFAQAnswer>
        <p>Fareplay maintains a transparent fee structure:</p>
        <ol>
          <li>
            A 1% edge on all games executed through the Farevault - this is
            significantly lower than traditional casinos which often charge
            3-5%.
          </li>
          <li>
            A small fee paid to Chainlink (approximately $0.02) for providing
            verified randomness, ensuring completely fair and transparent
            gameplay.
          </li>
          <li>
            Network gas fees on Arbitrum for processing transactions - these are
            typically very low, around a few cents. There are no hidden fees,
            account maintenance charges, or withdrawal fees from Fareplay
            itself. All fees are transparently shown before you confirm any game
            or transaction.
          </li>
        </ol>
      </SFAQAnswer>
    ),
  },
  {
    question: "Is there a minimum amount of FARE I need to play?",
    answer: (
      <SFAQAnswer>
        <p>
          While there's no strict minimum requirement to play, we recommend
          considering the economics of each bet carefully.
        </p>
        <p>
          Each game requires approximately $0.02 worth of FARE to cover
          Chainlink's randomness verification fee. For example, if you're
          betting $1, that $0.02 fee represents 2% of your bet, which can impact
          your expected returns.
        </p>
        <p>
          For optimal playing experience, we recommend starting with at least
          $10-20 worth of FARE to ensure the verification fees don't
          significantly impact your gaming experience.
        </p>
        <p>
          Remember, you can always start small and add more funds as you get
          comfortable with the platform.
        </p>
      </SFAQAnswer>
    ),
  },
  {
    question: "Where can I buy FARE tokens?",
    answer: (
      <SFAQAnswer>
        <p>
          FARE tokens can be purchased directly on Uniswap, the leading
          decentralized exchange. Here's how to buy:
        </p>
        <ol>
          <li>
            Visit Uniswap:
            https://app.uniswap.org/explore/tokens/arbitrum/0xfa4e888d9fbbcf4afa7bf057ecfe59ed04619e62
          </li>
          <li>Connect your wallet and ensure you're on the Arbitrum network</li>
          <li>
            The FARE token contract address is:
            0xFA4E888d9fBBcF4AfA7BF057ECfe59Ed04619e62
          </li>
          <li>
            Swap any supported token (USDC recommended) for FARE. Always verify
            the contract address matches to avoid scams. The official FARE token
            will show verified status on Uniswap.
          </li>
        </ol>
      </SFAQAnswer>
    ),
  },
  {
    question: "How do I withdraw my winnings from Fareplay?",
    answer: (
      <SFAQAnswer>
        <p>
          Withdrawing your winnings is straightforward and fully under your
          control through your Privy wallet. You have several options:
        </p>
        <ol>
          <li>
            Send your FARE directly to a supported exchange for conversion to
            other cryptocurrencies or fiat
          </li>
          <li>Use Uniswap to swap FARE for other tokens on Arbitrum</li>
          <li>
            Hold your FARE tokens in your Privy wallet for future games or
            potential appreciation. To withdraw, simply click the 'Withdraw'
            button in your account dashboard, enter the destination address, and
            confirm the transaction. Always verify the receiving address and
            network (Arbitrum) before confirming any withdrawal.
          </li>
        </ol>
      </SFAQAnswer>
    ),
  },
  {
    question: "What if I have problems funding my account?",
    answer: (
      <SFAQAnswer>
        <p>
          Our support team, led by Rush, is dedicated to helping you resolve any
          funding issues quickly.
        </p>
        <p>
          Join our Discord server (discord.gg/fareplay) and create a ticket in
          the #support channel. Tag Rush (@rush) in your message, and don't
          hesitate to be persistent - we want to ensure you get help quickly!
        </p>
        <p>
          Common issues we can help with include: transaction delays, network
          configuration, exchange withdrawals, and general wallet questions. We
          typically respond within minutes during peak hours.
        </p>
      </SFAQAnswer>
    ),
  },
  {
    question: "How can I build my own casino?",
    answer: (
      <SFAQAnswer>
        <p>
          Welcome to the future of online gaming! Fareplay Protocol is
          revolutionizing the casino industry by becoming the 'Shopify of
          Casinos' - the most affordable and accessible way to launch your own
          online casino with instant liquidity.
        </p>
        <p>Our No-Code Casino Platform allows anyone to:</p>
        <ol>
          <li>
            Launch Without Technical Knowledge:
            <ul>
              <li>Zero coding required\n- No blockchain expertise needed</li>
              <li>Instant setup with our drag-and-drop builder</li>
              <li>Custom branding and theme options</li>
            </ul>
          </li>
          <li>
            Access Immediate Liquidity:
            <ul>
              <li>Tap into Fareplay's shared liquidity pool</li>
              <li>No upfront capital requirements</li>
              <li>Instant payouts for your players</li>
            </ul>
          </li>
          <li>
            Benefit from Industry-Leading Economics:
            <ul>
              <li>Lowest deployment costs in the industry</li>
              <li>Minimal operational overhead</li>
              <li>Competitive revenue sharing model</li>
              <li>Built-in player acquisition tools</li>
            </ul>
          </li>
          <li>
            Get Started Immediately:
            <ul>
              <li>Simple social media integration</li>
              <li>Embed games directly in your existing platforms</li>
              <li>Mobile-first design\n- Multi-platform support</li>
            </ul>
          </li>
          <li>
            Future Expansion Features:
            <ul>
              <li>Custom game creation tools</li>
              <li>Advanced analytics dashboard</li>
              <li>Player management system</li>
              <li>Marketing automation tools</li>
            </ul>
          </li>
        </ol>
      </SFAQAnswer>
    ),
  },
];
