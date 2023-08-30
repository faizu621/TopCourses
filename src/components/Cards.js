
import { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
    let courses=props.courses;
    console.log(courses);
    let category=props.category;
    const [likedCourses,setLikedcourses]=useState([]);

    function getCourses(){

        if(category==='All')
        {
            let allCourses=[];
            Object.values(courses).forEach( array =>{
            array.forEach( courseData =>{
                allCourses.push(courseData);
            } )
        } )
        return allCourses;
        }
        else{
            //key values ke form me hai
            return courses[category];
        }
    }


    return(
        <div className=" flex flex-wrap justify-center gap-4 mb-4 " >
        {
            getCourses().map( (course) =>(
                <Card key={course.id} course={course} 
                    likedCourses={likedCourses}
                    setLikedcourses={setLikedcourses}
                />
            ))
        }
        </div>
    )
}
export default Cards;