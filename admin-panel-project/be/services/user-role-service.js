import { pool } from "../config/mysql-config.js"




export async function getUserId() {
    const [rows] = await pool.query(`Select * from user_role limit 10`)
    console.log(rows)
    return rows
}