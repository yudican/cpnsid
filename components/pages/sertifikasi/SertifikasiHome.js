 import React from 'react'
 import { OfficeTab } from './components/OfficeTab'
 import { ProgramTab } from './components/ProgramTab'
 
 export const SertifikasiHome = () => {
     return (
         <>
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item submenu">
                <a
                    class="nav-link active show"
                    style={{
                    backgroundColor: "#F6F5FB",
                    color: "#000",
                    fontSize: 12,
                    }}
                    id="pills-office-tab"
                    data-toggle="pill"
                    href="#pills-office"
                    role="tab"
                    aria-controls="pills-office"
                    aria-selected="true"
                >
                 Microsoft Office Specialist
                </a>
                </li>
                <li class="nav-item submenu">
                <a
                    class="nav-link"
                    style={{
                    backgroundColor: "#F6F5FB",
                    color: "#000",
                    fontSize: 12,
                    }}
                    id="pills-program-tab"
                    data-toggle="pill"
                    href="#pills-program"
                    role="tab"
                    aria-controls="pills-program"
                    aria-selected="false"
                >
                    Internet Program
                </a>
                </li>
            </ul> 
            <div class="tab-content mt-4">
                <OfficeTab/>
                <ProgramTab/>
            </div>
            
         </>
     )
 }
 

 