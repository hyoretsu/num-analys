import { Injectable } from "@nestjs/common";

@Injectable()
export default class ListEditions {
	public async execute(): Promise<Record<string, any[]>> {
		return {
			integration: [],
		};
	}
}
