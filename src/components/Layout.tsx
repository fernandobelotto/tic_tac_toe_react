import { Outlet } from 'react-router-dom'

type Props = {}

export const Layout = (props: Props) => {
  return (
    <div>
        <Outlet />
    </div>
  )
}