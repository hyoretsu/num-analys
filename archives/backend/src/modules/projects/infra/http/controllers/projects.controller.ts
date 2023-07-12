@Controller("applications")
export default class ProjectsController {
	constructor(private listApplications: any) {}

	@Get()
	async postProjects(): Promise<Project> {
		const project = await this.createProject.execute(body);

		return project;
	}
}
