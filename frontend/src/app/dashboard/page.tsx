import Navbar from '@/components/navbar'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FileUp } from 'lucide-react'
import { columns, DashboardReports } from './columns'
import { DataTable } from './data-table'

const Page = () => {
    return (
        <div>
            <Navbar variant='dashboard' />
            <div>
                <div className='flex items-center justify-between mx-20 my-8'>
                    <h1 className='text-3xl font-bold'>Your Dashboard</h1>
                    <Button> <FileUp /> Upload New Resume</Button>
                </div>
                <div className='container mx-auto py-10'>
                    <DataTable columns={columns} data={DashboardReports} />
                </div>
            </div>
        </div>
    )
}

export default Page