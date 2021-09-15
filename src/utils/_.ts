const isArrayEmpty = <T>(arr: T[]) => arr.length === 0;

const isFirstItem = <T>(_arr: T[], i: number) => i === 0;

const isLastItem = <T>(arr: T[], i: number) => arr.length - 1 === i;

export const _ = { isArrayEmpty, isFirstItem, isLastItem };
