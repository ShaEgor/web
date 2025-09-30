'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Students}>
      {students.map((students: StudentInterface) => (
        <h2 key={students.id}>
          {students.first_name}
          {students.last_name}
          {students.middle_name}
        </h2>
      ))}
    </div>
  );
};

export default Students;
