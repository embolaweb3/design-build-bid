import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BidSelected } from "../generated/schema"
import { BidSelected as BidSelectedEvent } from "../generated/DesignBuildBid/DesignBuildBid"
import { handleBidSelected } from "../src/design-build-bid"
import { createBidSelectedEvent } from "./design-build-bid-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let projectId = BigInt.fromI32(234)
    let selectedBidder = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBidSelectedEvent = createBidSelectedEvent(projectId, selectedBidder)
    handleBidSelected(newBidSelectedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BidSelected created and stored", () => {
    assert.entityCount("BidSelected", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BidSelected",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "projectId",
      "234"
    )
    assert.fieldEquals(
      "BidSelected",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "selectedBidder",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
