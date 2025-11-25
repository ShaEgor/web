import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const Student = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  return (
    <div className={`${styles.Students} ${student.isDeleted ? styles['--isDeleted'] : '' }`}>
      {student.id}
      {' - '}
      {student.firstName}
      {' '}
      {student.lastName}
      {' '}
      {student.middleName}
      {' '}
      <button onClick={onDeleteHandler}>Удалить</button>
    </div>
  );
};

export default Student;
