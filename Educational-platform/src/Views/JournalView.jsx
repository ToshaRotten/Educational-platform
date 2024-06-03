import React, {useState} from 'react';
import styles from './journalView.module.css'
import MainMenu from "../Components/Navbar/Nav/MainMenu";
import NavState from "../Components/Navbar/Nav/navState";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import ServerController from '../Controller/controller';
const JournalView = () => {
    let [lessons, setLessons] = useState([]);
    const serverController = new ServerController();

    lessons = serverController.getLessons();
    const [checkDnevnik, setCheckDnevnik] = useState(0);
    const [discipline, setDiscipline] = React.useState('');
    const [group, setGroup] = React.useState('');
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const savedRole = getStorageData("account",'no').role;

    const handleChangeGroup = (e) => {
        setGroup(e.target.value);
    };
    const handleChangeDiscipline = (e) =>
    {
        setDiscipline(e.target.value)
    }
    return (
        <div className={styles.wrapper}>

            <NavState>
                <MainMenu />
            </NavState>
            {savedRole==="teacher" &&
            <div className={styles.content}>
                <div className={styles.btn_dnevnik}>
                    <button className={checkDnevnik===0 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(0)}}> Журнал</button>
                    <button className={checkDnevnik===1 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(1)}}> Дисциплина</button>
                    <button className={checkDnevnik===2 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(2)}}> Учебный план</button>
                </div>
                {checkDnevnik===0 &&
                    <div>
                    <div className={styles.selectedFields}>
                <FormControl fullWidth className={styles.formCtr}>
                    <InputLabel id="demo-simple-select-label">Группа</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={group}
                        label="Группа"
                        onChange={handleChangeGroup}>
                        <MenuItem value={10}>007а</MenuItem>
                        <MenuItem value={20}>007б</MenuItem>
                        <MenuItem value={30}>007в</MenuItem>
                    </Select>

                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Дисциплина</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={discipline}
                        label="Дисциплина"
                        onChange={handleChangeDiscipline}>
                        <MenuItem value={20}>Алгебра</MenuItem>
                        <MenuItem value={30}>Геометрия</MenuItem>
                    </Select>
                </FormControl>

                    </div>

                    <table className={styles.iksweb}>
                        <thead>
                        <tr>
                            <th rowSpan="2">Студент</th>
                            <th colSpan="31">Декабрь</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                        </tr>
                        </thead>
                    <tbody>
                    <tr>
                    <td>Зотова</td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    </tr>
                    <tr>
                    <td>Абрамович</td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                    <td>Марков</td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                    <td>Калинин</td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    </tbody>
                    </table>
                        <button className={styles.saveChangesBtn}>
                            Сохранить изменения
                        </button>
                    </div>
                }

                {checkDnevnik===1 &&
                <table className={styles.iksweb}>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Предметы</th>
                        <th>Оценки</th>
                        <th>Пропуски</th>
                        <th>Средний балл</th>
                        <th>Итог</th>
                    </tr>
                    </thead><tbody>
                <tr>
                    <td>1</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                </tbody>
                </table> }
                {checkDnevnik===2 &&
                <div>
                    <table className={styles.iksweb}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название предмета</th>
                        <th>Код предмета</th>
                        <th>Часов по теории</th>
                        <th>Часов по практике</th>
                        <th>Часов консультаций</th>
                        <th>Часов экзамена</th>
                        <th>1 семест</th>
                        <th>2 семестр </th>
                        <th>3 семестр</th>
                        <th>4 семестр</th>
                        <th>5 семестр</th>
                        <th>6 семестр</th>
                        <th>Часов всего</th>
                        <th>Колличество подгрупп</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map(lesson => (
                    <tr key={lesson.id} >
                        <td>{lesson.id}</td>
                        <td>{lesson.name}</td>
                        <td>{lesson.code}</td>
                        <td>{lesson.hours_theory}</td>
                        <td>{lesson.hours_practice}</td>
                        <td>{lesson.hours_consult}</td>
                        <td>{lesson.hours_exam}</td>
                        <td>{lesson.first_semester}</td>
                        <td>{lesson.second_semester}</td>
                        <td>{lesson.third_semester}</td>
                        <td>{lesson.forth_semester}</td>
                        <td>{lesson.fifth_semester}</td>
                        <td>{lesson.sixth_semester}</td>
                        <td>{lesson.hours_total}</td>
                        <td>{lesson.count_subgroups}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                    </div>}
            </div>
             }
            { savedRole==="student" &&
            <div className={styles.content}>


            <div className={styles.btn_dnevnik}>
                <button className={checkDnevnik===0 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(0)}}> Журнал</button>
                <button className={checkDnevnik===1 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(1)}}> Дисциплина</button>
            </div>
                {checkDnevnik===1 &&
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Дисциплина</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={discipline}
                        label="Дисциплина"
                        onChange={handleChangeDiscipline}>
                        <MenuItem value={10}>Английский</MenuItem>
                        <MenuItem value={20}>Алгебра</MenuItem>
                        <MenuItem value={30}>Математика</MenuItem>
                    </Select>
                </FormControl>}
                {checkDnevnik===0 &&
            <table className={styles.iksweb}>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Предметы</th>
                    <th>Оценки</th>
                    <th>Пропуски</th>
                    <th>Средний балл</th>
                    <th>Итоговая</th>
                </tr>
                </thead><tbody>
                <tr>
                    <td>1</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Алгебра</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                </tbody>
            </table> }

        </div> }

        {savedRole==="admin" &&
            <div className={styles.content}>
                <div className={styles.btn_dnevnik}>
                    <button className={checkDnevnik===0 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(0)}}> Журнал</button>
                    <button className={checkDnevnik===1 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(1)}}> Дисциплина</button>
                    <button className={checkDnevnik===2 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(2)}}> Учебный план</button>
                </div>
                {checkDnevnik===0 &&
                    <div>
                    <div className={styles.selectedFields}>
                <FormControl fullWidth className={styles.formCtr}>
                    <InputLabel id="demo-simple-select-label">Группа</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={group}
                        label="Группа"
                        onChange={handleChangeGroup}>
                        <MenuItem value={10}>007а</MenuItem>
                        <MenuItem value={20}>007б</MenuItem>
                        <MenuItem value={30}>007в</MenuItem>
                    </Select>
                

                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Дисциплина</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={discipline}
                        label="Дисциплина"
                        onChange={handleChangeDiscipline}>
                        <MenuItem value={20}>Алгебра</MenuItem>
                        <MenuItem value={30}>Геометрия</MenuItem>
                    </Select>
                    
                </FormControl>

                    </div>

                    <table className={styles.iksweb}>
                        <thead>
                        <tr>
                            <th rowSpan="2">Студент</th>
                            <th colSpan="31">Декабрь</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                        </tr>
                        </thead>
                    <tbody>
                    <tr>
                    <td>Зотова</td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    <td contentEditable="true"></td>
                    </tr>
                    <tr>
                    <td>Абрамович</td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                    <td>Марков</td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                    <td>Калинин</td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                        <td contentEditable="true"></td>
                    </tr>
                    </tbody>
                    </table>
                      
                        <div className={styles.changes}><button className={styles.saveChangesBtn}>Изменить</button>
                    <button className={styles.saveChangesBtn}>Добавить</button>
                    <button className={styles.saveChangesBtn}>Удалить</button></div>
                    </div>
                }

                {checkDnevnik===1 &&
               <div> <div className={styles.selectedFields}>
                <FormControl fullWidth className={styles.formCtr}>
                    <InputLabel id="demo-simple-select-label">Группа</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={group}
                        label="Группа"
                        onChange={handleChangeGroup}>
                        <MenuItem value={10}>007а</MenuItem>
                        <MenuItem value={20}>007б</MenuItem>
                        <MenuItem value={30}>007в</MenuItem>
                    </Select>
                

                </FormControl><FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">Студент</InputLabel>
               <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={discipline}
                   label="Студент"
                   onChange={handleChangeDiscipline}>
                   <MenuItem value={20}>Галкин</MenuItem>
                   <MenuItem value={30}>Пугачева</MenuItem>
               </Select>
               
           </FormControl></div> <table className={styles.iksweb}>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Предметы</th>
                        <th>Оценки</th>
                        <th>Пропуски</th>
                        <th>Средний балл</th>
                        <th>Итог</th>
                    </tr>
                    </thead><tbody>
                <tr>
                    <td>1</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Геометрия</td>
                    <td>534н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                </tbody>
                </table><div className={styles.changes}><button className={styles.saveChangesBtn}>Изменить</button>
                    <button className={styles.saveChangesBtn}>Добавить</button>
                    <button className={styles.saveChangesBtn}>Удалить</button></div>
                    </div> }
                {checkDnevnik===2 &&
                <div>
                    <table className={styles.iksweb}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название предмета</th>
                        <th>Код предмета</th>
                        <th>Часов по теории</th>
                        <th>Часов по практике</th>
                        <th>Часов консультаций</th>
                        <th>Часов экзамена</th>
                        <th>1 семест</th>
                        <th>2 семестр </th>
                        <th>3 семестр</th>
                        <th>4 семестр</th>
                        <th>5 семестр</th>
                        <th>6 семестр</th>
                        <th>Часов всего</th>
                        <th>Колличество подгрупп</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map(lesson => (
                    <tr key={lesson.id} >
                        <td>{lesson.id}</td>
                        <td>{lesson.name}</td>
                        <td>{lesson.code}</td>
                        <td>{lesson.hours_theory}</td>
                        <td>{lesson.hours_practice}</td>
                        <td>{lesson.hours_consult}</td>
                        <td>{lesson.hours_exam}</td>
                        <td>{lesson.first_semester}</td>
                        <td>{lesson.second_semester}</td>
                        <td>{lesson.third_semester}</td>
                        <td>{lesson.forth_semester}</td>
                        <td>{lesson.fifth_semester}</td>
                        <td>{lesson.sixth_semester}</td>
                        <td>{lesson.hours_total}</td>
                        <td>{lesson.count_subgroups}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                <div className={styles.changes}><button className={styles.saveChangesBtn}>Изменить</button>
                    <button className={styles.saveChangesBtn}>Добавить</button>
                    <button className={styles.saveChangesBtn}>Удалить</button></div>
                     </div>}
            </div>
             }

       
        </div>

    );
};

export default JournalView;