import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  arrayUnion,
  arrayRemove,
  orderBy,
} from 'firebase/firestore';
import { Header } from '../components/Header';
import { auth } from '../firebase';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const DataPage = () => {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [finalMark, setFinalMark] = useState('');
  const [hours, setHours] = useState('');
  const [available, setAvailable] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  //fetchCourseById
  const fetchCourseById = async (id) => {
    const docRef = doc(db, 'courses', id);
    const docSnap = await getDoc(docRef);
    const courseData = { ...docSnap.data(), id: docSnap.id };
    return courseData;
  };

  onSnapshot(doc(db, 'users', auth.currentUser.uid), async (snapshot) => {
    const favoriteData = snapshot.data().favoriteCourses;
    const getFavCourses = favoriteData.map(
      async (courseId) => await fetchCourseById(courseId),
    );
    const favCourses = await Promise.all(getFavCourses);
    setFavoriteCourses(favCourses);
  });
  //Read courses
  const fetchCourses = async (field) => {
    try {
      const queryRef = field
        ? query(collection(db, 'courses'), orderBy(field, sortOrder))
        : query(collection(db, 'courses'));
      const snapshot = await getDocs(queryRef);
      const coursesData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setIsLoading(false);
      setCourses([...coursesData]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearInput = () => {
    setCourseName('');
    setFinalMark('');
    setHours('');
    setAvailable('');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isEditing) {
      //Create new course
      if (courseName && finalMark && hours && available) {
        try {
          addDoc(collection(db, 'courses'), {
            courseName,
            finalMark,
            hours,
            available,
          });
          fetchCourses();
          clearInput();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      try {
        //update existing course
        updateDoc(doc(db, 'courses', courseId), {
          courseName,
          finalMark,
          hours,
          available,
        });
        clearInput();
        setIsEditing(false);
        fetchCourses();
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Delete course
  const deleteEmployee = (id) => {
    deleteDoc(doc(db, 'courses', id));
    fetchCourses();
  };

  const updateCourse = (id, courseName, finalMark, hours, availability) => {
    if (!isEditing) {
      setIsEditing(true);
      setCourseId(id);
      setCourseName(courseName);
      setFinalMark(finalMark);
      setHours(hours);
      setAvailable(availability);
    } else {
      setIsEditing(false);
      clearInput();
    }
  };
  const handleFavorite = async (courseId) => {
    if (!isFavoriteCourse(courseId)) {
      updateDoc(doc(db, 'users', auth.currentUser.uid), {
        favoriteCourses: arrayUnion(...[courseId]),
      });
    } else {
      updateDoc(doc(db, 'users', auth.currentUser.uid), {
        favoriteCourses: arrayRemove(...[courseId]),
      });
    }
    // fetchFavoriteCourses();
  };
  //Sort courses according to selected field
  const sortBy = async (field) => {
    setSortOrder((sort) => (sort === 'asc' ? 'desc' : 'asc'));
    fetchCourses(field);
  };
  const isFavoriteCourse = (courseId) =>
    favoriteCourses.map((course) => course.id).includes(courseId);
  return (
    <>
      <Header />
      <form
        className="flex flex-col gap-1 px-10 py-4"
        onSubmit={formSubmitHandler}
      >
        {isEditing && (
          <>
            <label htmlFor="id">Course ID</label>
            <input
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="inpt"
              type="text"
              name="course-id"
              id="id"
              readOnly
              disabled
            />
          </>
        )}
        <label htmlFor="courseName">Course Name</label>
        <input
          placeholder="Enter course name here."
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="inpt"
          type="text"
          name="course-name"
          id="courseName"
        />
        <label htmlFor="finalMark">Final Mark</label>
        <input
          placeholder="Enter course final mark here."
          value={finalMark}
          onChange={(e) => setFinalMark(e.target.value)}
          className="inpt"
          type="number"
          name="final-mark"
          id="finalMark"
        />
        <label htmlFor="hours">Hours</label>
        <input
          value={hours}
          placeholder="Enter course hours here."
          onChange={(e) => setHours(e.target.value)}
          className="inpt"
          type="number"
          name="hours"
          id="hours"
        />
        <div className="availability flex flex-col gap-1">
          <label htmlFor="availability">Availability</label>
          <select
            className="inpt"
            name="availability"
            id="available"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option autoFocus>Select availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>

        <button className="btn my-2" onClick={formSubmitHandler}>
          {isEditing ? 'Update Course' : 'Add Course'}
        </button>
      </form>
      <div className="favorite-courses px-10 py-4">
        <h1 className="text-2xl font-bold">Favorite Courses</h1>
        {favoriteCourses.length === 0 ? (
          <h1 className="text-xl ms-2">No courses were added to favorite.</h1>
        ) : (
          favoriteCourses.map((course) => {
            return (
              <div key={course.id} className="flex gap-2 ms-2">
                <h1>
                  Course Title <span>{course.courseName}</span>
                </h1>
                <h1>
                  Course Hours <span>{course.hours}</span>
                </h1>
              </div>
            );
          })
        )}
      </div>
      <div className="relative overflow-x-auto px-10">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Course ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => sortBy('courseName')}
              >
                Course Name
              </th>
              <th
                scope="col"
                className="px-6 py-3  cursor-pointer"
                onClick={() => sortBy('finalMark')}
              >
                Final Mark
              </th>
              <th
                scope="col"
                className="px-6 py-3  cursor-pointer"
                onClick={() => sortBy('hours')}
              >
                Course Hours
              </th>
              <th
                scope="col"
                className="px-6 py-3  cursor-pointer"
                onClick={() => sortBy('available')}
              >
                Available
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Favorite
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td className="text-center py-4 text-2xl font-bold" colSpan={6}>
                  Loading...
                </td>
              </tr>
            ) : courses.length === 0 ? (
              <tr>
                <td className="text-center py-4 text-2xl font-bold" colSpan={6}>
                  No data available
                </td>
              </tr>
            ) : (
              courses.map((course) => {
                return (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{course.id}</td>
                    <td className="px-6 py-4">{course.courseName}</td>
                    <td className="px-6 py-4">{course.finalMark}</td>
                    <td className="px-6 py-4">{course.hours}</td>
                    <td className="px-6 py-4">{course.available}</td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        onClick={() => deleteEmployee(course.id)}
                        className="btn bg-red-600"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          updateCourse(
                            course.id,
                            course.courseName,
                            course.finalMark,
                            course.hours,
                            course.available,
                          )
                        }
                        className="btn bg-green-600"
                      >
                        {isEditing ? 'Cancel' : 'Update'}
                      </button>
                    </td>
                    <td onClick={() => handleFavorite(course.id)}>
                      {isFavoriteCourse(course.id) ? (
                        <FaHeart className="cursor-pointer text-red-600 mx-auto" />
                      ) : (
                        <FaRegHeart className="cursor-pointer hover:text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
