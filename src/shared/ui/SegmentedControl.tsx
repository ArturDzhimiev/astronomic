import styles from './SegmentedControl.module.css'

export interface SegmentedOption<T extends string> {
  value: T
  label: string
}

interface Props<T extends string> {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  label: string
  /** `tabs` — разделы с подчёркиванием, `inline` — компактный список через точку. */
  variant?: 'tabs' | 'inline'
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  variant = 'tabs',
}: Props<T>) {
  return (
    <div className={`${styles.group} ${styles[variant]}`} role="group" aria-label={label}>
      {options.map((option, index) => (
        <span className={styles.slot} key={option.value}>
          {variant === 'inline' && index > 0 && (
            <span className={styles.divider} aria-hidden="true" />
          )}
          <button
            type="button"
            className={styles.option}
            aria-pressed={option.value === value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  )
}
