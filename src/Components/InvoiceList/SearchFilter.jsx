import { Autocomplete, styled, TextField } from '@mui/material'
import React from 'react'

const invoiceStatus=[
    {label:'none'},
    {label:'Downloaded'},
    {label:'Draft'},
    {label:'Paid'},
    {label:'Past Due'},
    {label:'Partial Payment'}
]


const Wrapper=styled('div')({
    paddingLeft: 29,
    paddingBottom: 29,
    borderRadius: 10,
    border:'1px solid rgba(76, 78, 100, 0.2)',
})

const SearchFilter = () => {
  return (
    <Wrapper>
      <h2 style={{fontWeight:'400'}}>Search Filters</h2>
      <div style={{display:'flex'}}>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={invoiceStatus}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Invoice Status" />}
      style={{paddingRight:18,width:500}}
    />
    <TextField id="outlined-basic" label="Invoice Date" variant="outlined" style={{width:500}} value="10/07/2022"/>

      </div>
    </Wrapper>
  )
}

export default SearchFilter
