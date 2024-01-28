// import React from 'react'

import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { BoltIcon, CheckBadgeIcon, HomeIcon, MagnifyingGlassIcon, RectangleStackIcon, UserCircleIcon, UserIcon, } from "@heroicons/react/24/outline"

function Header() {
  return (

    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">

      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={BoltIcon} />
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
        <HeaderItem title='COLLECTIONS' Icon={RectangleStackIcon} />
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>

      <Image 
        className="object-contain bg-slate-200"
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAACzCAMAAACKPpgZAAAAclBMVEUAAAD///+wsLBZWVlhYWEaGhrq6urh4eGEhIQMDAz39/ckJCSBgYGWlpbMzMw2NjYpKSnw8PC2trZAQECcnJx2dnY5OTmKiork5OTBwcHU1NTJycnb29smJiZwcHBmZmYYGBhSUlKampqmpqYvLy+QkJAz2pgWAAADK0lEQVR4nO3c63KiQBCG4cGYNZKo8XyIm8TT/d/iJltlVqa7mWFEccv3+RlGuvlSBQIzOgcAAAAAAAAAAAAAAAAAAAAAAAAAt2c26RVtnxrrZb71epkMGuvFuY/Mt2isl6Ho5aGxXpxri246jfXyi2QMJGMhGQvJWEjGQjIWkrGQjIVkLCRjIRkLyVhIxkIyFpKxkIyFZCwkYyEZC8lY/pNkHk8E9/IoaKM+xahuYXsomXqqxFKS2bQ6uf/HfLHaTe29iJ1kM2WUPPJ5YHshma6ssleqrAJVYslkSqytt3RyqPYOrSNGFfcXSkb8v7JXpUpfjHq5fDJfJiRjGWpnRZL560Ayli3JWMRVimSO/KslyRz1ScbiXaBI5scbyViKtyxy+/0mU7w8ye33m8yIZAxrkrHcZzL5aHtiSTJHS2/MszykLHs+HXEnyazkKDmH+S6TGctRLyTzJdeGkUxmvFUhGZL5QTIWkrGQjIVkLCRjIRkLyVgulYxyi3GBZH4rVdY3nsy7shN5X3puMh9KFTnqtpJZy31M5ahzk/Hfezn15rfJZGTPcjrJQBlU7Dk050rZQU9UkWO8/GPVk8xC6adfOKz9RBmStSslozwl8qoM1CqbBpORM8DiFM/ToWS0R4sxwvMML5fMKK3lvNoMxsQqxUfWV07mKa1l7ycoQsnM06ooF4PrJaNMu4zRqpbMLK3Krslk1FNwWPEEHJ4pnVYl7QRcVzKHlJaHXpFgMr06qlw5GWVAmP+VJzy7PqWKnFV43WRS/p1+kXAy6teVcuqrkGsmoxxWiJg9G7EiQ/uyVy5tan2dyYyrtizrRCRTuUriJbvOZNx7xZ7FDqJW8Si3pWVyWeX6yVRsWnmAE7W+6ewqDSTjxsrNsCHXWo5b+bWpUEVb5dNEMs61Ilt+0z4cvSYu9v5JrxKr3mTcPqbrjvYozlVYLbjXJzsVrdv6h2NF/tKgLKw9gv3WnS5LL63Dkbk4ssIvDX4GqyTeE/wzHrU86touMWpU9tBj/zA9+B/4tpu3tVWERztRpPQEOkirAgAAAAAAAAAAAAAAAAAAAAAAAAAAAADx/gAI9kOSSLHxQAAAAABJRU5ErkJggg=='
        width={200}
        height={100}
      />

    </header>
  )
}

export default Header