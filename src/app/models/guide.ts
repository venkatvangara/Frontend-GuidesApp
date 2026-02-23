import { Activity } from './activity';

export interface Guide { id: number;
   title: string;
   description: string; days: number; 
   season: string; 
   activities: any[]; }
