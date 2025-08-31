"use client"

import { useState } from "react"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Wallet, ChevronDown, Copy, ExternalLink, LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function WalletConnectButton() {
  const { address, isConnected, chain } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address)
      toast({
        title: "Address copied",
        description: "Wallet address copied to clipboard",
      })
    }
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (isConnected && address) {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-eco-green/20 hover:border-eco-green/40 bg-transparent">
            <Wallet className="h-4 w-4 mr-2" />
            {formatAddress(address)}
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5 text-sm font-medium">Connected to {chain?.name || "Unknown"}</div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={copyAddress} className="cursor-pointer">
            <Copy className="h-4 w-4 mr-2" />
            Copy Address
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href={`${chain?.blockExplorers?.default?.url}/address/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View on Explorer
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => disconnect()} className="cursor-pointer text-destructive">
            <LogOut className="h-4 w-4 mr-2" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="bg-eco-green hover:bg-eco-dark-green text-white" disabled={isPending}>
          <Wallet className="h-4 w-4 mr-2" />
          {isPending ? "Connecting..." : "Connect Wallet"}
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">Choose a wallet</div>
        <DropdownMenuSeparator />
        {connectors.map((connector) => (
          <DropdownMenuItem
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="cursor-pointer"
            disabled={isPending}
          >
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2 bg-muted rounded flex items-center justify-center">
                <Wallet className="h-3 w-3" />
              </div>
              {connector.name}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
