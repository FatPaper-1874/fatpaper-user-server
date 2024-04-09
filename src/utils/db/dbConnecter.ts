import { DataSource } from "typeorm";
import {MYSQL_PORT} from "../../../../global.config";

const AppDataSource = new DataSource({
	type: "mysql",
	host: "mysql",
	port: MYSQL_PORT,
	username: "root",
	password: "root",
	database: "fatpaper_user",
	synchronize: true,
	entities: [__dirname + "/entities/*{.js,.ts}"],
});

export default AppDataSource;
