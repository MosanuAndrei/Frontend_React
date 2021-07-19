import React from 'react'
import './TableList.css'

class TableList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          response_data: [
              {fullName:"John Smith",dateFrom:"26.05.2021",dateTo:"01.06.2021",phoneNumber:"0000000000"},
              {fullName:"Ana Maria",dateFrom:"02.04.2021",dateTo:"05.04.2021",phoneNumber:"0100200003"},
              {fullName:"Daniel Bay",dateFrom:"14.02.2021",dateTo:"09.03.2021",phoneNumber:"0200300004"},
          ]
        }
      }
      
      renderTableData(){
          return this.state.response_data.map((response_data,index)=>{
              const {fullName,dateFrom,dateTo,phoneNumber} = response_data
              return(
                  <tr key={fullName}>
                      <td>{fullName}</td>
                      <td>{dateFrom}</td>
                      <td>{dateTo}</td>
                      <td>{phoneNumber}</td>
                  </tr>
              )
          })
      }
    
      render() {
        return (
            <div>
                <h1>Booking items list</h1>
                <table>
                  <tr>
                    <th>Full Name</th>
                    <th>Date From</th>
                    <th>Date To</th>
                    <th>Phone Number</th>
                  </tr>
                  <tbody>
                      {this.renderTableData()}
                  </tbody>
                </table>
            </div>
        );
      }
}

export default TableList