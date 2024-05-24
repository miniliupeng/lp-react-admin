export interface ResAttacker {
  id: number;
  ip: string;
  first_time: string;
  last_time: string;
  action_map: Record<string, number[]>;
  action_total: number;
  rule_name_list: any[];
  attacker_geo: {
    country: string;
    country_code: string;
    city: string;
  };
}
export interface ResAttackerList {
  attackers: ResAttacker[];
  total;
}
