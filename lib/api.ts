// lib/api.ts

import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

axios.defaults.baseURL = 'https://690c5c0b6ad3beba00f84120.mockapi.io/notes';

export const getNotes = async () => {
  const res = await axios.get<Note[]>('/notes');
  return { notes: res.data, total: res.data.length };
};
