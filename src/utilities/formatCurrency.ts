const CURRECNTY_FORMATTER = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' })

export function formatCurrency(number: number) {
    return CURRECNTY_FORMATTER.format(number);
}