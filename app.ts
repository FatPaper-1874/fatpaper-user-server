import "reflect-metadata";
import AppDataSource from "./src/utils/db/dbConnecter";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routerUser from "./src/routers/user";
import { serverLog } from "./src/utils/logger";
import chalk from "chalk";
import { TOKENKEY, APIPORT } from "./src/static";
// import { redisClientInit } from "./src/utils/redis";
import { roleValidation } from "./src/utils/role-validation";

async function bootstrap() {
	try {
		await AppDataSource.initialize().then(() => {
			serverLog(`${chalk.bold.bgGreen(" 数据库连接成功 ")}`);
		});

		// await redisClientInit().then(() => {
		// 	serverLog(`${chalk.bold.bgGreen(" Redis连接成功 ")}`);
		// });

		const app = express();

		app.use(cors());

		app.use("/static", express.static("public"));

		// app.use(roleValidation);

		app.use(bodyParser.json());

		app.use("/user", routerUser);

		app.listen(APIPORT, () => {
			serverLog(`${chalk.bold.bgGreen(` API服务启动成功 ${APIPORT}端口 `)} `);
		});
	} catch (e: any) {
		serverLog(`${chalk.bold.bgRed(` 服务器出错: `)}`, "error");
		console.log(e)
	}
}

bootstrap();
