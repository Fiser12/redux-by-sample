import { combineReducers } from 'redux';
import { edit, EditState } from './edit';
import { StudentNormalized } from '../../../model/normalized/studentNormalized';

export interface StudentLogic {
  edit: EditState;
};

export const studentLogic = combineReducers<StudentLogic>({
  edit
});
