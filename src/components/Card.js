
import {FcLike,FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";
//import { toast } from 'react-toastify';


const Card= (props) =>{
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedcourses=props.setLikedcourses;

    function clickHandler(){
        if(likedCourses.includes(course.id))
        {
            //pahle se like hua hai 
            setLikedcourses( (prev) => prev.filter((cid) =>( cid !== course.id) ) )
            toast.warning('Liked Removed');
        }
        else{
            if(likedCourses.length===0)
            {
                setLikedcourses([course.id]);
            }
            else{
                setLikedcourses( (prev) => ([...prev,course.id] ) );
            }
            toast.success('Liked succesfully');
        }
    }
    return(
        <div className=" w-[300px] bg-bgDark bg-opacity-80 rounded-md overlflow-hidden  ">

        <div className=" relative" >
            <img src={course.image.url} alt={course.image.alt} />
            <div className=" absolute right-2 bottom-[-12px] w-[40px] h-[40px] bg-white grid rounded-full place-items-center " >
                 <button onClick={clickHandler} >
                 {
                   likedCourses.includes(course.id) ? (<FcLike className=" text-[1.75rem] " />) : 
                   (<FcLikePlaceholder fontSize="1.75rem" />) 
                 }
                 </button>
            </div>
        </div>

        <div className="p-4" >
            <p className=" text-white text-lg font-semibold leading-6 " >{course.title}</p>
            <p className="mt-2 text-white" > {
                course.description.length>100 ? (course.description.substr(0,100)) +'...' : (course.description)
            } </p>
        </div>
        </div>
    )
}
export default Card;