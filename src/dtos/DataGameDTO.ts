export interface DataGameDTO {
  id: string;
  nameGame: string;
  amountTeams: number;
  dateGame: string;
  teams: {
    nameTeam: string;
    amountVictory: number;
  }[];
}
