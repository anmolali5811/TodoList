import React, {useState,useEffect} from 'react';

const getLocalItems = ()=>{
    let localitems = localStorage.getItem("localitems");
    if (localitems) {
        return JSON.parse(localitems);
    }else{
        return [];
    }
}
const Todo = () => {
    const [items, additems] = useState(getLocalItems());
    const [data, setdata] = useState("");
    const [update, setupdate] = useState(false);
    const [idupdate, setidupdate] = useState(null);
    
    useEffect(() =>{
        localStorage.setItem("localitems",JSON.stringify(items));
    },[items])

    const addinlist = ()=>{
       if (!data) {
            alert("Enter data to add")
        }else if (data && update) {
            additems(
                items.map((curelem) =>{
                   if (curelem.id === idupdate) {
                       return{ ...curelem , data: data}
                   }
                   return curelem;
                })
            )
            setupdate(false);
            setdata("");
            setidupdate(null);
        }
        else{
            additems([...items,{id: new Date().getTime().toString(),data : data}]);
            setdata("");
        }
    }
    const deleteitem = (id) => {
        const ditems = items.filter((curelem) =>{
            return curelem.id !== id;
        });
        additems(ditems)
    }
    const updateitem = (id) => {
        const uitems = items.find((curelem) =>{
            return curelem.id === id;
        });
        setupdate(true);
        setdata(uitems.data);
        setidupdate(id);
    }
    const deleteall = (id) => {
        additems([]);
    }
    return (
        <>
        <h1 className="heading">Todo List</h1>

        <div className= "main">
            <input type="text" value={data}
                onChange={(e) => setdata(e.target.value)}
                placeholder = "Enter data"
            />
            <button onClick ={addinlist} >
            {
                update ? "Update" : "Add"
            }
            </button>
            
            {
                items.length>0 ? <button onClick ={deleteall} >Delete All </button> : ""
            }
           
        </div>
        
        <div className="items">
        
        <h1>{
            items.length>0 ? `Number of lists is ${items.length}` : "No data available"
        }</h1>
        {
            items.map((curelem) =>{
                return (
                <div className="item" key={curelem.id}>
                <p>{curelem.data}</p>
                <div className="btns">
                <button onClick={()=> updateitem(curelem.id)}>U</button>
                <button onClick={()=> deleteitem(curelem.id)}>D</button>
                </div>
            </div>
                )
            })
        }
               
        </div>  
        </>
    )
}

export default Todo;
