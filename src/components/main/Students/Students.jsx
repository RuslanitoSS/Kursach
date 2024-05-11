import testImg from './assets/studentImg_1.png'
import StudentCard from '../StudentCard/StudentCard'
import Slider from '../../Slider/Slider'

const studentsTest = [{
    heading: "Золотой голос Московского Политеха",
    description: "Студентка первого курса взяла Гран-при на главном вокальном шоу Московского Политеха “Золотой голос 2023” с песней группы Король и Шут “Лесник”.",
    profileUrl: "/",
    imgUrl: testImg
}, {
    heading: "Золотой голос Московского Политеха",
    description: "Студентка первого курса взяла Гран-при на главном вокальном шоу Московского Политеха “Золотой голос 2023” с песней группы Король и Шут “Лесник”.",
    profileUrl: "/",
    imgUrl: testImg
}, {
    heading: "Золотой голос Московского Политеха",
    description: "Студентка первого курса взяла Гран-при на главном вокальном шоу Московского Политеха “Золотой голос 2023” с песней группы Король и Шут “Лесник”.",
    profileUrl: "/",
    imgUrl: testImg
}, {
    heading: "Золотой голос Московского Политеха",
    description: "Студентка первого курса взяла Гран-при на главном вокальном шоу Московского Политеха “Золотой голос 2023” с песней группы Король и Шут “Лесник”.",
    profileUrl: "/",
    imgUrl: testImg
}]
const renderStudentsCards = (array) =>
    array.map(element =>
        <StudentCard student={element} />
    )

const Students = () => {
    return (
        <div className="students">
            <h2 className='students__heading'>Достижения наших пользователей</h2>
            {/* slider */}
            <Slider>
            
            {studentsTest.map((element, index) =>
                <StudentCard key={index} student={element} />
                )}
                
            </Slider>

        </div>
    )
}

export default Students 