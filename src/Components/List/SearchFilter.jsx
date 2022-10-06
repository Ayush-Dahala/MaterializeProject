import { Autocomplete, styled, TextField } from '@mui/material'
import React from 'react'

const role=[
    {label:'Admin'},
    {label:'Author'},
    {label:'Editor'},
    {label:'Maintainer'},
    {label:'Subscriber'}
]

const plan=[
    {label:'Basic'},
    {label:'Company'},
    {label:'Enterprise'},
    {label:'Team'},
]

const status=[
    {label:'Pending'},
    {label:'Active'},
    {label:'Inactive'},
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
      options={role}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Role" />}
      style={{paddingRight:18,width:343}}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={plan}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Plan" />}
      style={{paddingRight:18,width:343}}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={status}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Status" />}
      style={{width:343}}
    />
      </div>
    </Wrapper>
  )
}

export default SearchFilter
