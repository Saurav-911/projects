import React from 'react';

export default function Introduction() {
  return (
    <>
      <div style={{
        width: "80%", // Smaller width (60% instead of 90%)
        height: "auto", 
        backgroundColor: "#110111ff", 
        margin: "auto", // This centers horizontally
        marginTop :"70px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif" // Optional: makes it look nicer
        
      }}>
        <h2 style={{textAlign: "center",color:"#80A1BA"}}>About me</h2>
        <div style={{
          display: "flex",
          width: "100%",
          gap: "10px",
          
          
        }}>
          <p style={{color:"white"}}>Hello i am Saurav Basnet. Ambitious IT undergraduate with strong problem-solving skills and hands-on project experience in networking and 
            programming. Proficient in collaboration and eager to apply technical expertise in real-world projects while 
            continuing to grow in cloud and software development .</p>
          <img
            src="https://fwmedia.fandomwire.com/wp-content/uploads/2023/09/18112024/Monkey-D.-Luffy-1.jpg"
            alt="my img"
            style={{ 
              flexShrink:1,
              width: "200px", 
              height: "200px", 
              borderRadius: 10,
              border: '3px solid white'
              
            }}
            
          />
        </div>
      </div>
    </>
  );
}