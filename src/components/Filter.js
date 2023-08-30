

const Filter = (props) =>{
    let filterData=props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function clickHandler(data){
        setCategory(data.title);
    }
    return(
        <div className="w-11/12 flex justify-center gap-4 py-4 flex-wrap max-w-max  gap-y-4 mx-auto " >
        {
            filterData.map( (item) => (
                <button className={` px-2 py-1 text-lg text-white bg-black border-2  rounded-md font-bold 
                hover:bg-opacity-50 transition-all duration-300 ${category===item.title ? "border-white bg-opacitiy-60" : " border-transparent bg-opacity-40 " } `} key={item.id} 
                onClick={() =>clickHandler(item)} >
                    {item.title}
                </button>
            ))
        }
        </div>
    )
}
export default Filter;