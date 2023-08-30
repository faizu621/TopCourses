import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
const App = () => {

  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  async function fetchdata(){
    setLoading(true);
    try{
      let res= await fetch(apiUrl);
      let output=await res.json();

      setCourses(output.data);

    }
    catch(error){
      toast.error('Error occured');
    }
    setLoading(false);
  }

  useEffect( () =>{
      fetchdata();
  },[])
  return <div className="bg-bgDark2" >
    <Navbar  />

    <Filter filterData={filterData} 
      category={category}
      setCategory={setCategory}
    />

    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[80vh]  " >
      {
        loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
      }
    </div>
  </div>;
};

export default App;
