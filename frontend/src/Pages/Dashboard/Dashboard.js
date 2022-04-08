import React from 'react'
import DashboardCard from '../../Components/Atoms/Cards/DashboardCard'
import Datepicker from '../../Components/Atoms/Datepicker/Datepicker'
import Table from '../../Components/Atoms/Table/Table'
import Title from '../../Components/Atoms/Title/Title'

const Dashboard = () => {
  return (
    <div className='p-6 bg-white rounded-lg border border-gray-200 shadow-md flex flex-col'>

        {/* Header Start */}
        <div className='flex flex-row flex-wrap justify-between pb-7'>
          <Title HeadTitle={'Dashbaord'} SubTitle={'Dashboard'} />
          <Datepicker />
        </div>
        {/* Header End */}

        {/* Content Start */}
        <div className='flex flex-row flex-wrap justify-center py-7'>
          <DashboardCard Value={'00'} Title={'Order'}/>
          <DashboardCard Value={'00'} Title={'Customer'}/>
          <DashboardCard Value={'00'} Title={'Revenue'}/>
          <DashboardCard Value={'00'} Title={'Purchase Frequency'}/>
          <DashboardCard Value={'00'} Title={'Product'}/>
        </div>

        <div className='py-7'>
          <Table HeadTitle={'Leads Data'} SubTitle={'1 Data'}/>
        </div>
        {/* Content End */}

    </div>
  )
}

export default Dashboard