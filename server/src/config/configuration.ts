export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        type: "mssql",
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 1433,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
    }
});