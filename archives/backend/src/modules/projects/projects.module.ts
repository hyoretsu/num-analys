import { MailProvider, MailProviderKeys, mailProviders } from "@hyoretsu/providers";
import { Module } from "@nestjs/common";

import { PrismaService } from "@database/prisma.service";

import ProjectsController from "./infra/http/controllers/projects.controller";
import ListEditions from "./services/ListApplications.service";

@Module({
	controllers: [ProjectsController],
	providers: [
		{
			provide: MailProvider,
			useClass: mailProviders[process.env.MAIL_DRIVER as MailProviderKeys],
		},
		PrismaService,
		{
			provide: ProjectsRepository,
			useClass: PrismaProjectsRepository,
		},
		...[
			CreateAttendance,
			CreateCertificate,
			CreateEdition,
			CreateEditionCertificates,
			CreateEvent,
			CreateEventCertificates,
			CreateParticipant,
			CreateParticipation,
			CreateProject,
			CreateSpeaker,
			FindLatestEdition,
			FindParticipant,
			ListEditions,
			ValidateCertificate,
		],
	],
})
export default class ProjectsModule {}
