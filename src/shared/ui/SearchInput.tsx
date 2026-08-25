import { SearchIcon } from './icons'
import styles from './SearchInput.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder: string
  label: string
}

export function SearchInput({ value, onChange, placeholder, label }: Props) {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input
        type="search"
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  )
}
