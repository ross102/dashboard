import React from 'react'

function Search() {
   const styles = {
    searchInputClass: `w-[378px] border-2 outline-none border-primary-gray-200 p-5
    rounded-[10px] h-[46px] text-sm text-primary-gray-500 font-medium`,
   }
  return (
    <div> 
      <input 
      className={styles.searchInputClass}
      type='search' 
      placeholder='Search by name, phone number' 
      
      />
    </div>
  )
}

export default Search