import React from 'react'
import { TableTitle } from '../headings/Dashboard'
import DataTable from "react-data-table-component";
import Menu from '../menu'
import { columns1 } from '../utils/Columns'; 
import Search from '../form/search'
import Filter from '../form/filter'
import { approved } from '../utils/Columns';
import { customGridStyles } from '../../utils/utils';
import ButtonPrimary from '../button'

function UsersTablebox() {
    const styles = {
        responsiveness: `xl:w-[1111px] lg:w-[670px] md:w-[470px]`,
        style: `min-h-[328px] rounded-[5px] p-6 overflow-hidden border-primary-gray-200 border bg-primary-white` 
        
       } 
  return (
    <div className={`${styles.responsiveness} ${styles.style}`}>
      
       <TableTitle title="Manage users" subtitle="Administer and oversee user accounts and privileges within the platform." />
       <div className='flex mt-[23px] justify-between'>
        <div className='flex flex-row '>
        <Search />
        <Filter />
        </div>
       <div>
        <ButtonPrimary height="48px" width="187px" text="Create New User" className='bg-accent-blue' />
       </div>
       </div>
       <div className='mt-3 border-t-[1px] border-primary-gray-200'>
       <DataTable
           columns={columns1}
           data={approved}
          //  progressPending={Loading}
           pagination
           striped
           // paginationServer
           // paginationRowsPerPageOptions={[10]}
           // paginationTotalRows={total}
           // onChangeRowsPerPage={handlePerRowsChange}
           // onChangePage={handlePageChange}
           highlightOnHover
           pointerOnHover
           // expandableRows
           // expandableRowsComponent={ExpandedComponent}
          customStyles={customGridStyles}
       />
    </div>
    </div>
  )
}

export default UsersTablebox