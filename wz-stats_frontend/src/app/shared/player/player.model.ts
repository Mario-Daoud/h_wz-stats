export interface Player {
  status: string;
  data: {
    title: string | null;
    platform: string | null;
    username: string;
    type: string;
    level: number;
    maxLevel: number;
    levelXpRemainder: number;
    levelXpGained: number;
    prestige: number;
    prestigeId: number;
    maxPrestige: number;
    totalXp: number;
    paragonRank: number;
    paragonId: number;
    s: number;
    p: number;
    lifetime: {
      all: {
        wins: number;
        kills: number;
        deaths: number;
        kdRatio: number;
      };
      mode: Record<string, any>;
      map: Record<string, any>;
    };
    weekly: {
      all: {
        wins: number;
        kills: number;
        deaths: number;
        kdRatio: number;
      };
      mode: Record<string, any>;
      map: Record<string, any>;
    };
    engagement: string | null;
  };
}
