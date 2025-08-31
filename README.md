# EcoMunay ♻️
**Incentivizing Recycling Onchain on Base**

EcoMunay is a web3 mini-app built on the Base network that tackles the challenge of waste management in Latin America. We provide a decentralized platform that rewards users for recycling PET bottles through blockchain-verified, instant digital rewards, turning environmental action into an economic opportunity.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/pengwins-projects/v0-eco-munay-web-app)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/wPkC1kwkG9J)

**Live App:** [v0-eco-munay-web-app.vercel.app](https://v0-eco-munay-web-app.vercel.app)

**v0 Project Link:** [Continue building on v0.app](https://v0.app/chat/projects/wPkC1kwkG9J)

## 🎯 The Problem

Recycling infrastructure in many parts of Latin America is limited, with few direct incentives for individuals to recycle. This results in more waste going to landfills and environmental pollution, while a valuable resource stream remains underutilized.

## ✨ Our Solution

EcoMunay bridges this gap by creating a transparent, onchain reward system:

- **Users deliver PET bottles** to smart recycling centers
- **Deposits are verified** using blockchain smart contracts  
- **Users instantly receive** MUNAY tokens and non-transferable NFT receipts as proof of recycling on the Base network
- **Redeemable vouchers** (ERC20-like tokens) can be used at partnered local retailers
- **All transactions are recorded onchain**, ensuring trust, transparency, and community ownership

This incentivizes recycling behavior and fosters new economic opportunities for local communities.

## 🏆 Hackathon Tracks & Why We Fit

### 1. Base Mini Apps Track
EcoMunay is a Base-native mini-app designed to be simple, snappy, and fun, perfectly fitting the track's goal of an engaging onchain experience within the Base ecosystem.

### 2. V0 by Vercel Track  
We leveraged v0 to rapidly translate ideas into a functional front-end UI using Next.js and Tailwind CSS, deployed on Vercel.

### 3. Public Good for LATAM (Crecimiento & ENS)
EcoMunay addresses a critical real-world issue in Latin America—waste management—offering a public good that promotes sustainability and economic inclusion.

## 🛠️ Tech Stack

- **Blockchain:** Base (Layer 2)
- **Smart Contracts:** Solidity with Hardhat
- **Frontend:** v0.dev, Next.js, React, Tailwind CSS
- **Wallet Integration:** wagmi, WalletConnect, MetaMask
- **Deployment:** Vercel
- **Styling:** shadcn/ui components with custom EcoMunay theme

## ⚙️ Features

- **Blockchain-verified recycling:** Non-transferable NFT receipts as immutable proof of recycling
- **MUNAY token rewards:** Redeemable ERC20-like voucher tokens incentivizing local commerce
- **Anti-fraud mechanisms:** Smart contract validation to ensure authenticity and fair rewards
- **Real-time impact dashboard:** Live metrics showing environmental impact and community progress
- **Multi-wallet support:** MetaMask, WalletConnect, Coinbase Wallet compatibility
- **Responsive design:** Mobile-optimized UI with automatic dark mode
- **Multilingual:** Full English and Spanish language support
- **Interactive map:** Find nearby recycling points with real-time availability
- **Social features:** Community-driven approach with real user stories and testimonials

## 🔄 Repository Sync (via v0)

This repository stays in sync with our deployed chats on [v0.app](https://v0.app). Changes made and deployed through the v0 interface are automatically synced here, and Vercel deploys the latest version.

## 📝 Prerequisites

- Node.js and npm installed
- MetaMask or compatible wallet configured for Base network
- Base chain account with ETH for gas fees (testnet or mainnet)
- WalletConnect Project ID from [cloud.reown.com](https://cloud.reown.com)
- Basescan API key for contract verification
- Basic familiarity with Solidity and Hardhat for smart contract development

## 🚀 Environment Variables

The following environment variables are required:

\`\`\`env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id
PRIVATE_KEY=your_private_key_for_deployment
BASE_RPC_URL=https://mainnet.base.org
BASESCAN_API_KEY=your_basescan_api_key
\`\`\`

## 🚧 Setup Instructions

1. **Clone the repository and install dependencies**
   \`\`\`bash
   git clone https://github.com/your-username/v0-eco-munay-web-app.git
   cd v0-eco-munay-web-app
   npm install
   \`\`\`

2. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your WalletConnect Project ID and other required variables

3. **Deploy smart contracts (optional)**
   \`\`\`bash
   npx hardhat run scripts/deploy.js --network base
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the app

## 🌍 Impact

EcoMunay empowers individuals and communities in Latin America to reduce waste while earning rewards, leveraging blockchain technology for a cleaner, more sustainable future. By creating economic incentives for recycling, we're building a circular economy that benefits both the environment and local communities.

---

*Built with ❤️ using v0.dev and deployed on Vercel*
