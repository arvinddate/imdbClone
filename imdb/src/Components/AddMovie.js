import React, { useRef } from 'react'

const AddMovie = () => {
    const titleRef=useRef('');
    const popularityRef=useRef('');
    const ratingRef=useRef('');
    const summaryRef = useRef('');
    

    
    
    const handleAddMovie = () => {
        const finalString = `Title: ${titleRef.current.value}, Popularity: ${popularityRef.current.value}, Rating: ${ratingRef.current.value}`;
        summaryRef.current.innerText = finalString;
        summaryRef.current.style.border = '1px solid red';
    }
  return (
    <div className='addMovie'>
        <h1>Add New Movie</h1>
        <div className='row'>
            <label>Title</label>
            <input ref={titleRef}  type='text' />
        </div>
        <div className='row'>
            <label>Popularity</label>
            <input ref={popularityRef}  type='text' />
        </div>
        <div className='row'>
            <label>Rating</label>
            <input ref={ratingRef}  type='text' />
        </div>
        <button onClick={handleAddMovie} >Add</button>
        <div ref={summaryRef}></div>
    </div>
  )
}

export default AddMovie






// import React, { useState } from 'react'

// const AddMovie = () => {
//     const [formData, setFormData]=useState({
//         title:'',
//         popularity:'',
//         rating:''
//     })
//     const handleTitleChange=(e)=>{
//         setFormData((prevVal)=>(
//             {
//                 ...prevVal,
//                 title:e.target.value
//             }
//         ));

//     };

//     const handlePopularityChange=(e)=>{
//         setFormData((prevVal)=>(
//             {
//                 ...prevVal,
//                 popularity:e.target.value
//             }
//         ));
//     }

//     const handleRatingChange=(e)=>{
//         setFormData((prevVal)=>(
//             {
//                 ...prevVal,
//                 rating:e.target.value
//             }
//         ));
//     }
    
//     const handleAddMovie=()=>{
//         console.log(formData);
        
//     }
//   return (
//     <div className='addMovie'>
//         <h1>Add New Movie</h1>
//         <div className='row'>
//             <label>Title</label>
//             <input onChange={handleTitleChange} type='text' />
//         </div>
//         <div className='row'>
//             <label>Popularity</label>
//             <input onChange={handlePopularityChange} type='text' />
//         </div>
//         <div className='row'>
//             <label>Rating</label>
//             <input onChange={handleRatingChange} type='text' />
//         </div>
//         <button onClick={handleAddMovie} >Add</button>
      
//     </div>
//   )
// }

// export default AddMovie
