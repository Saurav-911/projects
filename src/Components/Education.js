import React from 'react'

export default function Education() {
  return (
    <div className='container' style={{
      width:"80%",
      height:"auto",
      border:"2px solid black",
      backgroundColor: "#110111ff",
      margin:"auto",
      display:"flex",
      marginTop :"70px",
      flexDirection:"column",
      borderRadius: "10px",
      justifyContent:"center",
      gap:"20px",
      padding:"20px",
      color:"white",
      fontFamily: "Arial, sans-serif"
    }}>
       <h2 style={{alignSelf:"center"}}>My Education</h2>
       <div style={{display:"flex",justifyContent:"space-between",gap:"10px",margin:"10px"}}>
       <img src="https://th.bing.com/th/id/OIP.bkiaaEqSa3vxjHthbw9VZQHaH9?w=108&h=108&c=1&bgcl=da0de5&r=0&o=7&dpr=1.4&pid=ImgRC&rm=3" alt="logo" style={{width:"30%",height:200,borderRadius: "10px"}}/>
       <div style={{width:"70%",height:"auto",background:"#2d2c2dff",borderRadius: "10px",display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}}><div style={{display:"flex",justifyItems:"start",gap:"30px",justifyContent:"space-between",flexWrap:"wrap"}}><h3 style={{margin:"10px"}}>ORCHID PUPIL SECONDARY SCHOOL(Gothatar)</h3> <p style={{margin:"10px"}}>FINISHED at 2020 </p></div>  <p style={{margin:"10px"}} >GPA: 3.70 </p></div>
       </div>
       <div style={{display:"flex",justifyContent:"space-between",gap:"10px",margin:"10px"}}>
       <div style={{width:"70%",height:"auto",background:"#2d2c2dff",borderRadius: "10px",display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}}><div style={{display:"flex",justifyItems:"start",gap:"30px",justifyContent:"space-between",flexWrap:"wrap"}}><h3 style={{margin:"10px"}}>KATHMANDU MODEL SECONDARY SCHOOL (Bagbazar) </h3> <p style={{margin:"10px"}}>2021–2023 </p></div>  <p style={{margin:"10px"}} >GPA: 3.62 </p></div>
       <img src="https://kmcen.edu.np/wp-content/uploads/2023/09/kmc-college-300x192.png"  alt="logo" style={{width:"30%",height:200,borderRadius: "10px"}}/>
       </div>
       <div style={{display:"flex",justifyContent:"space-between",gap:"10px",margin:"10px"}}>
       <img src="https://www.collegeinfonepal.com/_next/image?url=https%3A%2F%2Fmedia.collegeinfonepal.com%2Fcollege%2Fdp%2FLord_Buddha_Education_Foundation_LBEF_Logo.jpg&w=384&q=75"  alt="logo" style={{width:"30%",height:200,borderRadius: "10px"}}/>
       <div style={{width:"70%",height:"auto",background:"#2d2c2dff",borderRadius: "10px",display:"flex",alignItems:"start",justifyContent:"center",flexDirection:"column"}}><div style={{display:"flex",justifyItems:"start",gap:"30px",justifyContent:"space-between",flexWrap:"wrap"}}><h3 style={{margin:"10px"}}>Lord Buddha Education Foundation, Maitidevi, Kathmandu </h3> <p style={{margin:"10px"}}>2023–Present </p></div>  <p style={{margin:"10px"}} >B.Sc. in Information Technology (Cloud Engineering)  </p></div> 
       </div> 
    </div>
  )
}
