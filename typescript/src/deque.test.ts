import { expect } from "vitest";

import { Deque } from './deque'

describe("Deque", () => {
  it("Deve inserir um item no inicio do array", () => {
    const sut = new Deque<number>([2]);
    sut.pushFront(25);

    expect(sut.data[0]).toBe(25);
  });

  it("Deve inserir um item no final do array", () => {
    const sut = new Deque<number>([2]);
    sut.pushBack(25);

    expect(sut.data[sut.length - 1]).toBe(25);
  });

  it("Deve remover um item no inicio do array", () => {
    const sut = new Deque<number>([2, 25]);
    sut.popFront();

    expect(sut.data[0]).toBe(25);
  });

  it("Deve remover um item no final do array", () => {
    const sut = new Deque<number>([2, 25]);
    sut.popBack();

    expect(sut.data[sut.length - 1]).toBe(2);
  });
});
