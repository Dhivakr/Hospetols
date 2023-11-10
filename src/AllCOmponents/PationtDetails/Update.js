// import React,{useEffect,useState} from 'react';
// import { Container,Row,Col } from 'react-bootstrap';

// const Update = () => {
//     const[formdatas,setFormDatas]=useState({
//         fname:'',
//         lname:'',
//         fathername:'',
//         mothername:'',
//         age:'',
//         gender:'',
//         email:'',
//         mobile:'',
//         address:'',
//         pations_descriptions:'',

//     })

//     const [fname,setFname]=useState("");
//     const [lname,setLname]=useState("");
//     const [fathername,setfathername]=useState("");
//     const [mothername,setmothername]=useState("");
//     const [age,setage]=useState("");
//     const [gender,setgender]=useState("");
//     const [email,setemail]=useState("");
//     const [mobile,setmobile]=useState("");
//     const [address,setaddress]=useState("");
//     const [pations_descriptions,setpations_descriptions]=useState("");
//     const [id,setId]=useState("")

//     useEffect(()=>{
//         setId(localStorage.getItem('id'))
//         setFname(localStorage.getItem('fname'))
//         setLname(localStorage.getItem('lname'))
//         setfathername(localStorage.getItem('fathername'))
//         setmothername(localStorage.getItem('mothername'))
//         setage(localStorage.getItem('age'))
//         setgender(localStorage.getItem('gender'))
//         setemail(localStorage.getItem('email'))
//         setmobile(localStorage.getItem('mobile'))
//         setaddress(localStorage.getItem('address'))
//         setpations_descriptions(localStorage.getItem('pations_descriptions'))
    
//     },[])

//   return (
//     <Container>
//         <Row>
//             <Col>
//                <div className='pations_Regiter_details'>
//                <h1 className='text-center mt-3 mb-3 '>updateds</h1>
//                   <form >
                  
//                         <div>
//                             <label>FirstName</label>
//                             <input type='text' name='fname'
//                             placeholder='Enter Your FirstName' 
//                             onChange={(e)=>setFormDatas({...formdatas,fname:e.target.value})} />
//                        </div>
                   
//                        <div>
//                             <label>LastName</label>
//                             <input type='text' name='lname'
//                             placeholder='Enter Your LastName' 
//                             onChange={(e)=>setFormDatas({...formdatas,lname:e.target.value})} />
//                        </div>
                   
//                         <div>
//                             <label>FatherName</label>
//                             <input type='text' name='fathername'
//                             placeholder='Enter Your FatherName' 
//                             onChange={(e)=>setFormDatas({...formdatas,fathername:e.target.value})} />
//                        </div>
                    
//                        <div>
//                             <label>MotherName</label>
//                             <input type='text' name='mothername'
//                             placeholder='Enter Your MotherName' 
//                             onChange={(e)=>setFormDatas({...formdatas,mothername:e.target.value})} />
//                        </div>
                    
//                         <div>
//                             <label>Age</label>
//                             <input type='text' name='age'
//                             placeholder='Enter Your Age' 
//                             onChange={(e)=>setFormDatas({...formdatas,age:e.target.value})} />
//                        </div>
                    
//                        <div>
//                             <label>Gender</label>
//                             <input type='text' name='gender'
//                             placeholder='Enter Your Gender' 
//                             onChange={(e)=>setFormDatas({...formdatas,gender:e.target.value})} />
//                        </div>
                    
//                         <div>
//                             <label>Email</label>
//                             <input type='text' name='email'
//                             placeholder='Enter Your Email Address' 
//                             onChange={(e)=>setFormDatas({...formdatas, email:e.target.value})} />
//                        </div>
                    
//                        <div>
//                             <label>MobileNo</label>
//                             <input type='text' name='mobile'
//                             placeholder='Enter Your Mobile No' 
//                             onChange={(e)=>setFormDatas({...formdatas,mobile:e.target.value})} />
//                        </div>
                    
//                         <div>
//                             <label>Address</label>
//                             <input type='text' name='address'
//                             placeholder='Enter Your Address' 
//                             onChange={(e)=>setFormDatas({...formdatas, address:e.target.value})} />
//                        </div>
                   
//                        <div>
//                             <label>PationsDescriptions</label>
//                             <input type='text' name='pations_descriptions'
//                             placeholder='Enter Your Pationsdescriptions' 
//                             onChange={(e)=>setFormDatas({...formdatas,pations_descriptions:e.target.value})} />
//                        </div>
                    
//                    <button className='btn'>Updated</button>
//                   </form>
                
//                </div>
//             </Col>
//         </Row>
//     </Container>
//   )
// }

// export default Update
