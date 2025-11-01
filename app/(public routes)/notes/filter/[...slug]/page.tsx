// app/notes/filter/[...slug]/page.tsx

import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = {
  params: { slug?: string[] };
};

const NotesByCategory = async ({ params }: Props) => {
  const slug = params.slug ?? ['all'];
  const category = slug[0] === 'all' ? undefined : slug[0];
  const data = await getNotes(category);

  return (
    <div>
      <h1>Notes List</h1>
      <NoteList notes={data.notes} />
    </div>
  );
};

export default NotesByCategory;
