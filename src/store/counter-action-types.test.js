import toJson from "enzyme-to-json";
import { counterActionTypes } from "./counter-action-types"

describe("counterActionTypes", () => {
  it("should match snapshot", () => {
    expect(counterActionTypes).toMatchSnapshot()
  })
})