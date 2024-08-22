import {
  BidSelected as BidSelectedEvent,
  BidSubmitted as BidSubmittedEvent,
  DisputeRaised as DisputeRaisedEvent,
  DisputeResolved as DisputeResolvedEvent,
  MilestonePaid as MilestonePaidEvent,
  ProjectPosted as ProjectPostedEvent
} from "../generated/DesignBuildBid/DesignBuildBid"
import {
  BidSelected,
  BidSubmitted,
  DisputeRaised,
  DisputeResolved,
  MilestonePaid,
  ProjectPosted
} from "../generated/schema"

export function handleBidSelected(event: BidSelectedEvent): void {
  let entity = new BidSelected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.selectedBidder = event.params.selectedBidder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBidSubmitted(event: BidSubmittedEvent): void {
  let entity = new BidSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bidId = event.params.bidId
  entity.projectId = event.params.projectId
  entity.bidder = event.params.bidder
  entity.bidAmount = event.params.bidAmount
  entity.completionTime = event.params.completionTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeRaised(event: DisputeRaisedEvent): void {
  let entity = new DisputeRaised(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.disputeId = event.params.disputeId
  entity.projectId = event.params.projectId
  entity.disputant = event.params.disputant
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let entity = new DisputeResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.disputeId = event.params.disputeId
  entity.result = event.params.result

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMilestonePaid(event: MilestonePaidEvent): void {
  let entity = new MilestonePaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.milestoneIndex = event.params.milestoneIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectPosted(event: ProjectPostedEvent): void {
  let entity = new ProjectPosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.projectId = event.params.projectId
  entity.owner = event.params.owner
  entity.description = event.params.description
  entity.budget = event.params.budget
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
