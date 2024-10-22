import React from 'react'
import { TableUserDetail } from '../userDetailComponent';

export const columns = [
    {
      name: "Visitors Details",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="py-4 pr-3">
            <TableUserDetail username='Immaculata Ojadi' userInitials='IO' phone="09087655678" status={true} />
          </div>
        );
      },
      width: '220px',
      height: '75px'
    },
    {
      name: "Visitors Contact",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="font-extrabold text-xs">
            {"immaculata@gmai..."}
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
    {
      name: "Purpose Of Visit",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="text-xs font-medium">
             Consultant
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },

    {
      name: "Whom to See",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="shared__status-view">
              <TableUserDetail username='Immaculata Ojadi' userInitials='IO' phone="09087655678" status={false} />
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
    {
      name: "Status",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="shared__status-view">
            
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
    {
      name: "Action",
      //selector: row => row.id,
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="shared__status-view">
            
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
   
  ];


  export const columns1 = [
    {
      name: "Username",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="py-4 pr-3">
            <TableUserDetail username='Abayomi dibia' userInitials='IO' phone="09087655678" status={true} />
          </div>
        );
      },
      width: '220px',
      height: '75px'
    },
    {
      name: "Contact",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="font-extrabold text-xs">
            {"immaculata@gmai..."}
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
    {
      name: "Designation",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="text-xs font-medium">
             Front desk officer
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },

    {
      name: "Whom to See",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="shared__status-view">
              <TableUserDetail username='Immaculata Ojadi' userInitials='IO' phone="09087655678" status={false} />
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
    {
      name: "Status",
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="shared__status-view">
            
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
    {
      name: "Action",
      //selector: row => row.id,
      cell: (row:any, index:any, column:any, id:any) => {
        return (
          <div className="shared__status-view">
            
          </div>
        );
      },
      width: '160px',
      height: '75px'
    },
   
  ];

  export const approved = [
    {
      VisitorsDetails: "",
      VisitorsContact: "",
      PurposeOfVisit: "",
      WhomToSee: "",
    },
    {
        VisitorsDetails: "",
        VisitorsContact: "",
        PurposeOfVisit: "",
        WhomToSee: "",
      },
      {
        VisitorsDetails: "",
        VisitorsContact: "",
        PurposeOfVisit: "",
        WhomToSee: "",
      },
      {
        VisitorsDetails: "",
        VisitorsContact: "",
        PurposeOfVisit: "",
        WhomToSee: "",
      },
   
  ];