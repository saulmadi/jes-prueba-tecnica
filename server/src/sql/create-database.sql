IF NOT EXISTS (
        SELECT *
        FROM sys.databases
        WHERE name = 'MinisterioPublico'
        )
BEGIN
    CREATE DATABASE [MinisterioPublico]
END