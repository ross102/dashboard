import React, {useState} from 'react'
import { TableTitle } from '../headings/Dashboard'
import DataTable from "react-data-table-component";
import Menu from '../menu'
import { columns } from '../utils/Columns'; 
import Search from '../form/search'
import Filter from '../form/filter'
import { approved } from '../utils/Columns';
import { customGridStyles } from '../../utils/utils';
import ButtonPrimary from '../button'
import SmallModal from '../modals/layoutmodal';

function Tablebox() {
    const styles = {
        responsiveness: `xl:w-[859px] lg:w-[670px] md:w-[470px]`,
        style: `min-h-[328px] rounded-[5px] p-6 overflow-hidden border-primary-gray-200 border bg-primary-white` 
        
       } 

       const [isModalOpen, setIsModalOpen] = useState(false);

       const toggleModal = () => {
           setIsModalOpen(!isModalOpen)
       }
     
  return (
    <div className={`${styles.responsiveness} ${styles.style}`}>
       <SmallModal isOpen={isModalOpen} openOrClose={toggleModal} width='1000px' height='600px' overflowX={'none'} overflowY={'none'}>
          <p> This is a simple modal</p>
        </SmallModal>
       <TableTitle title="Visitors " subtitle="Here, you'll find all the details for both walk-in visitors and scheduled appointments." />
       <Menu />
       <div className='flex mt-[23px] justify-between'>
        <div className='flex flex-row '>
        <Search />
        <Filter />
        </div>
       <div>
        <ButtonPrimary height="48px" width="162px" text="Create Visitor" handleClick={toggleModal}  className='bg-accent' />
       </div>
       </div>
       <div className='mt-3 border-t-[1px] border-primary-gray-200'>
       <DataTable
           columns={columns}
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

export default Tablebox