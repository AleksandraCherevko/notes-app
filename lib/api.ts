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

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

// FILTER

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const getCategories = async () => {
  const res = await axios<Category[]>('/category');
  return res.data;
};
