import React from 'react'
import { Sidebar } from 'flowbite-react'
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const DashSidebar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user)
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label="User"
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>

          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
