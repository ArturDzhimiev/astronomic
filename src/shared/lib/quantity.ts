import type { Quantity } from '../../features/recipes/model/types'

/**
 * Строка количества для таблицы. Пока просто исходное значение, но вся
 * логика форматирования собрана в одном месте — под будущий пересчёт
 * порций и себестоимости.
 */
export function formatQuantity(quantity: Quantity): string {
  return quantity.raw
}

/** Известно ли числовое количество (можно ли считать себестоимость). */
export function hasAmount(quantity: Quantity): boolean {
  return quantity.amount !== null
}
