import { useRouterContext, TitleProps } from '@pankod/refine-core'
import { Button } from '@pankod/refine-mui'
import { logo, yariga } from 'assets/'

import React from 'react'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext()

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Yariga" width="28px" />
        ) : (
          <img src={yariga} alt="yariga" width="140px" />
        )}
      </Link>
    </Button>
  )
}
