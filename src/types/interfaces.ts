import {UnitOfTime}  from './enums'

export interface IDuration {
	readonly amount: number;
	readonly unit: UnitOfTime;
}