import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AddWhatsapp from '../Components/Partials/Button/AddWhatsapp';
import CardInfo from '../Components/Partials/Card/CardInfo';
import CardWhatsapp from '../Components/Partials/Card/CardWhatsapp';
import LeadTable from '../Components/Partials/Table/LeadTable';

function Dashboard() {
  return (
    <div>
        <Navbar />
        <div className='px-10 py-5 border'>
            <div className='pb-10 flex justify-between items-center flex-wrap'>
                <CardWhatsapp names={'Zall'} phone={'+6281245527645'}/>
                <CardWhatsapp names={'Zall'} phone={'+6281245527645'}/>
                <CardWhatsapp names={'Zall'} phone={'+6281245527645'}/>
                <CardWhatsapp names={'Zall'} phone={'+6281245527645'}/>
            </div>
            <div className='flex flex-wrap justify-between'>
                <CardInfo Value={'10'} Title={'Total Order'}/>
                <CardInfo Value={'10'} Title={'Total Customer'}/>
                <CardInfo Value={'10'} Title={'Total Revenue'}/>
                <CardInfo Value={'10'} Title={'Total Product'}/>
                <CardInfo Value={'10'} Title={'Total CS'}/>
            </div>
            <div className='py-10'>
                <LeadTable HeadTitle={'Data Leads'} SubTitle={'3 Data'}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard