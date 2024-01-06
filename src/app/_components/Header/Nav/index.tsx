'use client'

import React from 'react'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <>
      <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="none" />
        })}
      </nav>
      <div>
        <h3>EVERLANE</h3>
      </div>
      <nav
        className={[classes.nav_2, user === undefined && classes.hide].filter(Boolean).join(' ')}
      >
        {user && (
          <Link href="/account">
            <FaRegUser size={20} />
          </Link>
        )}
        {!user && (
          <Button
            className={classes.btn}
            el="link"
            href="/login"
            label="Login"
            appearance="primary"
            onClick={() => (window.location.href = '/login')}
          />
        )}
        {user && <CartLink />}
      </nav>
    </>
  )
}
