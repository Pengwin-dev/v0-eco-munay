export const ECOMUNAY_RECEIPT_ABI = [
  "function createRecyclingSession(address recycler, uint256 bottleCount, uint256 rewardAmount, string memory locationId) external returns (uint256)",
  "function redeemVoucher(uint256 tokenId) external",
  "function getUserSessions(address user) external view returns (uint256[] memory)",
  "function sessions(uint256) external view returns (address recycler, uint256 bottleCount, uint256 rewardAmount, uint256 timestamp, string memory locationId, bool redeemed)",
  "event RecyclingSessionCreated(uint256 indexed tokenId, address indexed recycler, uint256 bottleCount, uint256 rewardAmount, string locationId)",
  "event VoucherRedeemed(uint256 indexed tokenId, address indexed recycler)",
] as const

export const ECOMUNAY_VOUCHER_ABI = [
  "function createVoucher(address recipient, uint256 amount, string memory qrCode, string memory locationId) external returns (uint256)",
  "function redeemVoucher(uint256 voucherId) external",
  "function getUserVouchers(address user) external view returns (uint256[] memory)",
  "function isVoucherValid(uint256 voucherId) external view returns (bool)",
  "function vouchers(uint256) external view returns (uint256 id, address recipient, uint256 amount, uint256 expiryDate, bool redeemed, string memory qrCode, string memory locationId, uint256 createdAt)",
  "event VoucherCreated(uint256 indexed voucherId, address indexed recipient, uint256 amount, string qrCode, string locationId)",
  "event VoucherRedeemed(uint256 indexed voucherId, address indexed recipient, uint256 amount)",
] as const
