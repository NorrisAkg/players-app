export interface LengthAwarePaginator<T> {
  current_page: number;
  last_page: number;
  per_page: number;
  prev_page_url: string;
  next_page_url: string;
  first_page_url: string;
  from: number;
  to: number;
  total: number;
  data: Array<T>;
}

export interface PositionInput {
  label: string;
  description: string;
}

export interface PositionOutput {
  id: number;
  label: string;
  description: string;
}

export interface PlayerInput {
  firstname: string;
  lastname: string;
  jersey_number: number;
  position_id: PositionOutput["id"];
  picture?: string;
}

export interface PlayerOutput {
  id: string;
  firstname: string;
  lastname: string;
  jersey_number: number;
  position: PositionOutput;
  picture?: string;
}
