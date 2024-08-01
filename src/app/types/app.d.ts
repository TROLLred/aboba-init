import type {
  AppDispatchType,
  RootStateType,
} from '../providers/store/config/store';

declare global {
  type RootState = RootStateType;
  type AppDispatch = AppDispatchType;
}
export {};
