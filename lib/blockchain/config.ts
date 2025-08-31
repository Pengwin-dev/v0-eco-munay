import { createConfig, http } from "wagmi"
import { base, baseSepolia } from "wagmi/chains"
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors"

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ""

export const config = createConfig({
  chains: [base, baseSepolia],
  connectors: [
    injected(),
    walletConnect({
      projectId,
      metadata: {
        name: "EcoMunay",
        description: "Recycle bottles and earn instantly with blockchain rewards",
        url: typeof window !== "undefined" ? window.location.origin : "https://ecomunay.com",
        icons: ["https://ecomunay.com/logo.png"],
      },
      showQrModal: true,
    }),
    coinbaseWallet({
      appName: "EcoMunay",
      appLogoUrl: "https://ecomunay.com/logo.png",
    }),
  ],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
  },
  ssr: true,
})

export const CONTRACT_ADDRESSES = {
  [base.id]: {
    EcoMunayReceipt: "", // Will be filled after deployment
    EcoMunayVoucher: "", // Will be filled after deployment
  },
  [baseSepolia.id]: {
    EcoMunayReceipt: "", // Will be filled after deployment
    EcoMunayVoucher: "", // Will be filled after deployment
  },
} as const
