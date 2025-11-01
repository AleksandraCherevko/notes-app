import { Note } from '@/lib/api';
import Link from 'next/link';
import css from '../NoteList/NoteList.module.css';

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li className={css.listItem}>
      <h3 className={css.title}>{item.title}</h3>
      <p className={css.content}>{item.content}</p>

      <div className={css.footer}>
        <span className={css.tag}>{item.tag}</span>
        <a href={`/notes/${item.id}`} className={css.link}>
          View
        </a>
      </div>
    </li>
  );
};

export default NoteItem;
