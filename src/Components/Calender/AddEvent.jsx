import { Button, styled } from '@mui/material'
import React from 'react'

const List=styled('li')({
    listStyle:'none',
    
})

const ListData=styled('span')({
    lineHeight: 2,
    fontSize: '1rem'
})

const AddEvent = () => {
  return (
    <div style={{border:'1px solid rgba(76, 78, 100, 0.2)',width:'25%',display: 'flex',flexDirection: 'column',alignItems: 'center',paddingTop:20,borderTopLeftRadius: 10,borderBottomLeftRadius: 10}}>
      <Button variant="contained" style={{width:'80%',backgroundColor:'rgb(102, 108, 255)'}}>ADD EVENT</Button>
      <ul style={{padding:0,marginRight:'auto',paddingLeft: 25}}>
        <h4 style={{fontWeight:400}}>CALENDARS</h4>
        <List>
            <input type="checkbox"/>
            <ListData>View All</ListData>
        </List>
        <List>
            <input type="checkbox"/>
            <ListData>Personal</ListData>
        </List>
        <List>
            <input type="checkbox"/>
            <ListData>Bussiness</ListData>
        </List>
        <List>
            <input type="checkbox"/>
            <ListData>Family</ListData>
        </List>
        <List>
            <input type="checkbox"/>
            <ListData>Holiday</ListData>
        </List>
        <List>
            <input type="checkbox"/>
            <ListData>ETC</ListData>
        </List>
      </ul>
    </div>
  )
}

export default AddEvent
