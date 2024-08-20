/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  11155111: {
    DesignBuildBid: {
      address: "0x6d33d2769E9a4E108bDE18De5d7706EDF65D53F9",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "selectedBidder",
              type: "address",
            },
          ],
          name: "BidSelected",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "bidId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "bidder",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "bidAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "completionTime",
              type: "uint256",
            },
          ],
          name: "BidSubmitted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "disputeId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "disputant",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "reason",
              type: "string",
            },
          ],
          name: "DisputeRaised",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "disputeId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "result",
              type: "bool",
            },
          ],
          name: "DisputeResolved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "milestoneIndex",
              type: "uint256",
            },
          ],
          name: "MilestonePaid",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "budget",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "ProjectPosted",
          type: "event",
        },
        {
          inputs: [],
          name: "bidCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "bids",
          outputs: [
            {
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "bidder",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "bidAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "completionTime",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "selected",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "disputeCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "disputes",
          outputs: [
            {
              internalType: "uint256",
              name: "projectId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "disputant",
              type: "address",
            },
            {
              internalType: "string",
              name: "reason",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "yesVotes",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "noVotes",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "resolved",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "fetchProjects",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "budget",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "selectedBidder",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "milestones",
                  type: "uint256[]",
                },
                {
                  internalType: "bool[]",
                  name: "milestonePaid",
                  type: "bool[]",
                },
                {
                  internalType: "bool",
                  name: "disputeRaised",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "selectedBidIndex",
                  type: "uint256",
                },
              ],
              internalType: "struct DesignBuildBid.Project[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_budget",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_deadline",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "_milestones",
              type: "uint256[]",
            },
          ],
          name: "postProject",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "projectCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "projects",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "budget",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "active",
              type: "bool",
            },
            {
              internalType: "address",
              name: "selectedBidder",
              type: "address",
            },
            {
              internalType: "bool",
              name: "disputeRaised",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "selectedBidIndex",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_projectId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reason",
              type: "string",
            },
          ],
          name: "raiseDispute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_projectId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_milestoneIndex",
              type: "uint256",
            },
          ],
          name: "releaseMilestonePayment",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_projectId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_bidIndex",
              type: "uint256",
            },
          ],
          name: "selectBid",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_projectId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_bidAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_completionTime",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "_proposedMilestones",
              type: "uint256[]",
            },
          ],
          name: "submitBid",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_disputeId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_vote",
              type: "bool",
            },
          ],
          name: "voteOnDispute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
