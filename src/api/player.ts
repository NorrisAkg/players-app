import { LengthAwarePaginator, PlayerOutput } from "@/dto/types.dto";
import axiosIns from "@/plugins/axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "X-Requested-With": "XMLHttpRequest",
  Accept: "application/json",
  // "Content-Type": "application/json",
};

export const getAllPlayers = async (): Promise<
  LengthAwarePaginator<PlayerOutput>
> => {
  const { data } = (await axiosIns.get(`/players`, { headers })).data;

  return data;
};
