// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title EcoMunayReceipt
 * @dev Non-transferable digital receipt for recycling sessions
 * Each receipt represents a verified recycling session with bottle count and reward amount
 */
contract EcoMunayReceipt is ERC721, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    
    struct RecyclingSession {
        address recycler;
        uint256 bottleCount;
        uint256 rewardAmount;
        uint256 timestamp;
        string locationId;
        bool redeemed;
    }
    
    mapping(uint256 => RecyclingSession) public sessions;
    mapping(address => uint256[]) public userSessions;
    
    event RecyclingSessionCreated(
        uint256 indexed tokenId,
        address indexed recycler,
        uint256 bottleCount,
        uint256 rewardAmount,
        string locationId
    );
    
    event VoucherRedeemed(uint256 indexed tokenId, address indexed recycler);
    
    constructor() ERC721("EcoMunay Receipt", "ECORECEIPT") Ownable(msg.sender) {}
    
    /**
     * @dev Creates a new recycling session receipt
     * @param recycler Address of the person who recycled
     * @param bottleCount Number of bottles recycled
     * @param rewardAmount Amount of reward earned
     * @param locationId Identifier of the recycling location
     */
    function createRecyclingSession(
        address recycler,
        uint256 bottleCount,
        uint256 rewardAmount,
        string memory locationId
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        
        sessions[tokenId] = RecyclingSession({
            recycler: recycler,
            bottleCount: bottleCount,
            rewardAmount: rewardAmount,
            timestamp: block.timestamp,
            locationId: locationId,
            redeemed: false
        });
        
        userSessions[recycler].push(tokenId);
        
        _safeMint(recycler, tokenId);
        
        emit RecyclingSessionCreated(tokenId, recycler, bottleCount, rewardAmount, locationId);
        
        return tokenId;
    }
    
    /**
     * @dev Marks a voucher as redeemed
     * @param tokenId The token ID to redeem
     */
    function redeemVoucher(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Not the owner of this receipt");
        require(!sessions[tokenId].redeemed, "Voucher already redeemed");
        
        sessions[tokenId].redeemed = true;
        
        emit VoucherRedeemed(tokenId, msg.sender);
    }
    
    /**
     * @dev Get user's recycling sessions
     * @param user Address of the user
     */
    function getUserSessions(address user) external view returns (uint256[] memory) {
        return userSessions[user];
    }
    
    /**
     * @dev Override transfer functions to make tokens non-transferable
     */
    function transferFrom(address, address, uint256) public pure override {
        revert("EcoMunay receipts are non-transferable");
    }
    
    function safeTransferFrom(address, address, uint256) public pure override {
        revert("EcoMunay receipts are non-transferable");
    }
    
    function safeTransferFrom(address, address, uint256, bytes memory) public pure override {
        revert("EcoMunay receipts are non-transferable");
    }
}
