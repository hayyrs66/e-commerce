'use client'

import Link from 'next/link'
import { Category, Media } from '../../../../payload/payload-types'
import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'

type CategoryCardProps = {
  category: Category
}

function CategoryCard({ category }: CategoryCardProps) {
  const media = category.media as Media

  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      style={{
        backgroundImage: `url(${media.url})`,
      }}
      className={classes.card}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
