// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title EcoMunayVoucher
 * @dev Manages digital vouchers for recycling rewards
 * Handles voucher creation, validation, and redemption
 */
contract EcoMunayVoucher is Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    
    Counters.Counter private _voucherIdCounter;
    
    struct Voucher {
        uint256 id;
        address recipient;
        uint256 amount;
        uint256 expiryDate;
        bool redeemed;
        string qrCode;
        string locationId;
        uint256 createdAt;
    }
    
    mapping(uint256 => Voucher) public vouchers;
    mapping(address => uint256[]) public userVouchers;
    mapping(string => bool) public usedQRCodes;
    
    uint256 public constant VOUCHER_VALIDITY_PERIOD = 30 days;
    
    event VoucherCreated(
        uint256 indexed voucherId,
        address indexed recipient,
        uint256 amount,
        string qrCode,
        string locationId
    );
    
    event VoucherRedeemed(
        uint256 indexed voucherId,
        address indexed recipient,
        uint256 amount
    );
    
    constructor() Ownable(msg.sender) {}
    
    /**
     * @dev Creates a new voucher
     * @param recipient Address of the voucher recipient
     * @param amount Amount of the voucher
     * @param qrCode Unique QR code for the voucher
     * @param locationId Location where the voucher was created
     */
    function createVoucher(
        address recipient,
        uint256 amount,
        string memory qrCode,
        string memory locationId
    ) external onlyOwner returns (uint256) {
        require(!usedQRCodes[qrCode], "QR code already used");
        
        uint256 voucherId = _voucherIdCounter.current();
        _voucherIdCounter.increment();
        
        vouchers[voucherId] = Voucher({
            id: voucherId,
            recipient: recipient,
            amount: amount,
            expiryDate: block.timestamp + VOUCHER_VALIDITY_PERIOD,
            redeemed: false,
            qrCode: qrCode,
            locationId: locationId,
            createdAt: block.timestamp
        });
        
        userVouchers[recipient].push(voucherId);
        usedQRCodes[qrCode] = true;
        
        emit VoucherCreated(voucherId, recipient, amount, qrCode, locationId);
        
        return voucherId;
    }
    
    /**
     * @dev Redeems a voucher
     * @param voucherId ID of the voucher to redeem
     */
    function redeemVoucher(uint256 voucherId) external nonReentrant {
        Voucher storage voucher = vouchers[voucherId];
        
        require(voucher.recipient == msg.sender, "Not the voucher recipient");
        require(!voucher.redeemed, "Voucher already redeemed");
        require(block.timestamp <= voucher.expiryDate, "Voucher expired");
        
        voucher.redeemed = true;
        
        emit VoucherRedeemed(voucherId, msg.sender, voucher.amount);
    }
    
    /**
     * @dev Get user's vouchers
     * @param user Address of the user
     */
    function getUserVouchers(address user) external view returns (uint256[] memory) {
        return userVouchers[user];
    }
    
    /**
     * @dev Check if voucher is valid and not redeemed
     * @param voucherId ID of the voucher
     */
    function isVoucherValid(uint256 voucherId) external view returns (bool) {
        Voucher memory voucher = vouchers[voucherId];
        return !voucher.redeemed && block.timestamp <= voucher.expiryDate;
    }
}
