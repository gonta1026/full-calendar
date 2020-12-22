import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  //親のwraperにクラスを付与をして各カレンダーの適用するcssを変更する
  <div className="hoge">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ul>
      <li>
        <Link href="/">
          <a>top</a>
        </Link>        
      </li>
      <li>
        <Link href="/staff">
          <a>スタッフ月間予約表</a>
        </Link>        
      </li>
      <li>
        <Link href="/staff-week">
          <a>スタッフ週間予約表</a>
        </Link>        
      </li>
    </ul>
    {children}
  </div>
)

export default Layout
