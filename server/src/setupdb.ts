import * as mssql from 'mssql';
import {readFileSync} from "fs";

const create = async () => {
    try {

        const sql = readFileSync(__dirname + '/sql/create-database.sql', "utf8")
        const sqlConfig = {
            password: process.env.DATABASE_PASSWORD,
            database: 'master',
            stream: false,
            options: {
                enableArithAbort: true,
                encrypt: true
            },
            port: 1433,
            user: process.env.DATABASE_USER,
            server: process.env.DATABASE_HOST,
        }
        console.log(sql);
        const pool = await mssql.connect(sqlConfig);
        const result = await pool.request().query(sql);
        console.dir(result)
    } catch (err) {
        console.log(err);
    }
}

create().then(value => {
    console.log("finish");
    process.exit(0);
});