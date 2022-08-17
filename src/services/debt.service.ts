import { Debt } from '../types/Debt';
import Api from './api';

export const getAllDebts = async () => {
  const debts = await Api.get(`/debts`);
  return debts.data;
};
export const postDebt = async (bodyDebts: Debt) => {
  const result = await Api.post(`/debts`, bodyDebts);
  return result;
};
export const deleteDebt = async (id: number) => {
  const result = await Api.delete(`/debts/${id}`);
  return result;
};
export const editDebt = async (id: number, bodyDebts: Debt) => {
  const result = await Api.put(`/debts/${id}`, bodyDebts);
  return result;
};

export const debtsService = {
  getAllDebts,
  postDebt,
  deleteDebt,
  editDebt,
};
