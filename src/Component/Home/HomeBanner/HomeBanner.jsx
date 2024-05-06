import React from 'react'

function HomeBanner() {
  return (
    <div style={{height:"1100px",display:"flex"}}>
        <div id="firstPartBanner" style={{width:"28%"}}>
            <div><img style={{marginTop:"20px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-9245/k2-_54011f79-10d8-491c-be3a-c344570253f4.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" /></div>
            <div><img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3edb/k2-_5726031a-c9da-4c78-81c5-b160f77a86c3.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" /></div>
            <div><img style={{height:"200px",width:"380px",marginTop:"30px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-e3bc/k2-_08cd4f86-11cd-493e-a0c4-2dbebbadae5e.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" /></div>
        </div>

        <div id="secondPartBanner">
            <div>
                <img style={{marginTop:"20px",borderRadius:"10px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-a34b/k2-_b1e03b3b-fbbb-4d19-a9bf-a5d7a1c3c192.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70" alt="" />
            </div>

            <div style={{display:"flex",gap:"20px"}}>
                <div><img src="https://i5.walmartimages.com/dfw/4ff9c6c9-4fa3/k2-_fbd4bff1-e2d0-4f44-99db-1617ca3aeac1.v1.jpg?odnHeight=776&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" /></div>
                <div><img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5edd/k2-_0c3c40ea-a699-4797-8ec8-398a54c2c0eb.v1.jpg?odnHeight=776&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" /></div>
            </div>

            <div><img style={{marginTop:"30px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-21d7/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg?odnHeight=432&odnWidth=1588&odnBg=&odnDynImageQuality=70" alt="" /></div>
        </div>

        <div id="thirdPartBanner">
            <div>
                <img style={{width:"100%",marginTop:"20px",borderRadius:"10px"}}  src="https://i5.walmartimages.com/dfw/4ff9c6c9-834d/k2-_3c696555-b959-4a78-b12c-abe0eff45511.v1.jpg?odnHeight=432&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" />
                <img style={{width:"100%",marginTop:"20px",borderRadius:"10px"}}  src="https://i5.walmartimages.com/dfw/4ff9c6c9-f4df/k2-_cd64f289-ac82-4193-8f09-bf372cc13dc3.v1.jpg?odnHeight=512&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" />
                <img style={{width:"100%",marginTop:"20px",borderRadius:"10px"}} src="https://i5.walmartimages.com/dfw/4ff9c6c9-4b0a/k2-_951b0c63-3672-431e-b75f-f2ff3aa18c64.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomeBanner