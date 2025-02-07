import React, {useState} from 'react'

const AddProduct =()=>{
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [category, setCategory]=useState('');
    const [company, setCompany]= useState('');
    const [error, setError] = useState(false)

    const addProduct = async () => {

        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch("http://localhost:5000/add-product", {
            method:'post',
            body:JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-Type":"application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }); 
        result = (await result).json();
        console.warn(result)
    }
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input className="inputBox" value={name} type="text" placeholder="Enter product name" onChange={(e)=>{setName(e.target.value)}}/>
            {error && !name && <span className='invalid-input'> Enter valid name</span>}
            <input className="inputBox" type="text" placeholder="Enter product price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            {error && !price && <span className='invalid-input'> Enter valid price</span>}
            <input className="inputBox" type="text" placeholder="Enter product category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            {error && !category && <span className='invalid-input'> Enter invalid category</span>}
            <input className="inputBox" type="text" placeholder="Enter product company" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            {error && !company && <span className='invalid-input'> Enter invalid company</span>}
            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct