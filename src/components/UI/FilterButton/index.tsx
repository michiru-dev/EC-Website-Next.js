import React from 'react'
import { categoryArr } from '@/const/selectOptions'
import styles from '@/components/UI/FilterButton/FilterButton.module.scss'

type FilterButtonProps = {
  handleOnchange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function FilterButton({ handleOnchange }: FilterButtonProps) {
  return (
    <div className={styles.div}>
      カテゴリ別表示:
      <select
        className={styles.select}
        onChange={(e) => handleOnchange(e)}
        name='category'
        id='category'
      >
        {categoryArr.map((category) => {
          return (
            <option key={category.eng} value={category.eng}>
              {category.jp}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FilterButton
