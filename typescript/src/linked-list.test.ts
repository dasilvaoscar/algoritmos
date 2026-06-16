import { expect } from "vitest";

import { LinkedList } from './linked-list'

describe("LinkedList", () => {
  it("Insere meu nome na em 3 nós", () => {
    const sut = new LinkedList<string>()
    sut.push("Oscar")
    sut.push("da")
    sut.push("Silva")

    expect(sut.indexOf('Oscar')).toBe(0)
    expect(sut.indexOf('da')).toBe(1)
    expect(sut.indexOf('Silva')).toBe(2)

    expect(sut.length).toBe(3)
  })

  it("Insere meu nome na em 3 nós e remove os 2 primeiros", () => {
    const sut = new LinkedList<string>()
    sut.push("Oscar")
    sut.push("da")
    sut.push("Silva")

    sut.remove("Oscar")
    sut.remove("da")

    expect(sut.indexOf('Oscar')).toBeUndefined()
    expect(sut.indexOf('da')).toBeUndefined()
    expect(sut.indexOf('Silva')).toBe(2)
    expect(sut.length).toBe(1)
  })
});
