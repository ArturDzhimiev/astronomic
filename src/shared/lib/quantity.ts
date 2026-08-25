import type { Quantity } from '../../features/recipes/model/types'

/**
 * The quantity string for the table. Just the raw value for now, but all the
 * formatting lives in one place, ready for future portion scaling and cost
 * calculation.
 */
export function formatQuantity(quantity: Quantity): string {
  return quantity.raw
}

/** Whether a numeric amount is known (i.e. whether cost can be calculated). */
export function hasAmount(quantity: Quantity): boolean {
  return quantity.amount !== null
}
