import { FaStar } from 'react-icons/fa'
import styles from '@/components/UI/StarRating/StarRating.module.scss'

type StarRatingProps = {
  rating: { rate: number; count: number }
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className={`${styles.ratingDiv}`}>
      {/* Array(n)で配列を作るが、それだけだと中身が空でmapができない
        展開することで、中身がundefined値になってmap可能になる */}
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={i}>
            <FaStar
              size={20}
              color={ratingValue <= rating.rate ? '#fad817' : '#e4e5e9'}
            />
          </label>
        )
      })}
      <p className={`${styles.ratingCount}`}>({rating.count})</p>
    </div>
  )
}

export default StarRating
