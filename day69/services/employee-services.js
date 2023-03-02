import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
  const [rows] = await pool.query(`Select * from employees limit 10`);
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [rows] = await pool.query("select max(emp_no) as max from employees");
  return rows[0];
}

export async function hireEmployee(
  emp_no,
  birthDate,
  firstName,
  lastName,
  gender,
  hireDate
) {
  // const query = ` insert into employees values(@max_emp_id+1, '1990-01-01', 'John', 'McKay', 'M', '2010-01-01')`
  const query = `INSERT INTO employees VALUES( ?, ?, ?, ?, ?, ?)`;
  const [rows] = await pool.query(query, [
    emp_no,
    birthDate,
    firstName,
    lastName,
    gender,
    birthDate,
    hireDate,
  ]);
  return rows;
}

export async function updateEmployee(empNo, lastName, gender) {
  const query = `UPDATE employees SET last_name=?, gender=? where emp_no=?`;
  const [rows] = await pool.query(query, [lastName, gender, empNo]);
  return rows;
}

export async function fireEmployee(empNo) {
  const query = `DELETE FROM employees where emp_no=${empNo}`;
  const [rows] = await pool.query(query);
  return rows;
}
