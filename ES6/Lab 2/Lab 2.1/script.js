function displayCourseInfo(course){
    const defaultData = Object.assign({
        courseName:'default Course Name',
        courseDuration:'0',
        courseOwner:'default Course Owner'
    },course)
    return {
        courseName:defaultData.courseName,
        courseDuration:defaultData.courseDuration,
        courseOwner:defaultData.courseOwner
     }
}


console.log(displayCourseInfo({courseOwner:"Mahmoud",courseDuration:"10 ", courseName:"JS"}))