import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BidSelected,
  BidSubmitted,
  DisputeRaised,
  DisputeResolved,
  MilestonePaid,
  ProjectPosted
} from "../generated/DesignBuildBid/DesignBuildBid"

export function createBidSelectedEvent(
  projectId: BigInt,
  selectedBidder: Address
): BidSelected {
  let bidSelectedEvent = changetype<BidSelected>(newMockEvent())

  bidSelectedEvent.parameters = new Array()

  bidSelectedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  bidSelectedEvent.parameters.push(
    new ethereum.EventParam(
      "selectedBidder",
      ethereum.Value.fromAddress(selectedBidder)
    )
  )

  return bidSelectedEvent
}

export function createBidSubmittedEvent(
  bidId: BigInt,
  projectId: BigInt,
  bidder: Address,
  bidAmount: BigInt,
  completionTime: BigInt
): BidSubmitted {
  let bidSubmittedEvent = changetype<BidSubmitted>(newMockEvent())

  bidSubmittedEvent.parameters = new Array()

  bidSubmittedEvent.parameters.push(
    new ethereum.EventParam("bidId", ethereum.Value.fromUnsignedBigInt(bidId))
  )
  bidSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  bidSubmittedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )
  bidSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "completionTime",
      ethereum.Value.fromUnsignedBigInt(completionTime)
    )
  )

  return bidSubmittedEvent
}

export function createDisputeRaisedEvent(
  disputeId: BigInt,
  projectId: BigInt,
  disputant: Address,
  reason: string
): DisputeRaised {
  let disputeRaisedEvent = changetype<DisputeRaised>(newMockEvent())

  disputeRaisedEvent.parameters = new Array()

  disputeRaisedEvent.parameters.push(
    new ethereum.EventParam(
      "disputeId",
      ethereum.Value.fromUnsignedBigInt(disputeId)
    )
  )
  disputeRaisedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  disputeRaisedEvent.parameters.push(
    new ethereum.EventParam("disputant", ethereum.Value.fromAddress(disputant))
  )
  disputeRaisedEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return disputeRaisedEvent
}

export function createDisputeResolvedEvent(
  disputeId: BigInt,
  result: boolean
): DisputeResolved {
  let disputeResolvedEvent = changetype<DisputeResolved>(newMockEvent())

  disputeResolvedEvent.parameters = new Array()

  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "disputeId",
      ethereum.Value.fromUnsignedBigInt(disputeId)
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam("result", ethereum.Value.fromBoolean(result))
  )

  return disputeResolvedEvent
}

export function createMilestonePaidEvent(
  projectId: BigInt,
  milestoneIndex: BigInt
): MilestonePaid {
  let milestonePaidEvent = changetype<MilestonePaid>(newMockEvent())

  milestonePaidEvent.parameters = new Array()

  milestonePaidEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  milestonePaidEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneIndex",
      ethereum.Value.fromUnsignedBigInt(milestoneIndex)
    )
  )

  return milestonePaidEvent
}

export function createProjectPostedEvent(
  projectId: BigInt,
  owner: Address,
  description: string,
  budget: BigInt,
  deadline: BigInt
): ProjectPosted {
  let projectPostedEvent = changetype<ProjectPosted>(newMockEvent())

  projectPostedEvent.parameters = new Array()

  projectPostedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  projectPostedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  projectPostedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  projectPostedEvent.parameters.push(
    new ethereum.EventParam("budget", ethereum.Value.fromUnsignedBigInt(budget))
  )
  projectPostedEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return projectPostedEvent
}
