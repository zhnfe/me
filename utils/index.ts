/**
 * 带有类型限制的 Object.assign
 * @param target 目标对象
 * @param source 数据对象, key 必须为 target 中的 key
 */
export function assignObject<
T extends Record<string, unknown>,
U extends Partial<{[P in keyof T]: T[P]}>
>(target: T, source: U) {
  return Object.assign(target, source)
}
