import { LengthAwarePaginator, PlayerOutput } from "@/dto/types.dto";
import axiosIns from "@/plugins/axios";

export const getAllPlayers = async (): Promise<LengthAwarePaginator<PlayerOutput>> => {
  const { data } = (await axiosIns.get(`players`)).data;

  return data;
};
