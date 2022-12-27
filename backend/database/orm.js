// orm.js
import sql from "mssql";

import pool from "./database.js";

class ORM {

  static async create(table, data) {

    // Create a new request
    let request = new sql.Request(pool)

    // Set up the INSERT statement
    let query = 'INSERT INTO users ('
    let values = 'VALUES ('

    // Iterate over the data object and add the column names and values to the INSERT statement
    for (const [key, value] of Object.entries(data)) {
      query += `${key}, `
      values += `@${key}, `
      request.input(key, sql.NVarChar, value)
    }

    // Remove the trailing comma from the column names and values lists
    query = query.slice(0, -2) + ') '
    values = values.slice(0, -2) + ')'

    // Concatenate the column names and values lists to create the full INSERT statement
    query += values

    console.log(query);

    // Execute the INSERT statement
    return request.query(query);
  }

  static async read(table, conditions) {

    console.log("Connected")

    // Create a new request
    const request = new sql.Request(pool)

    console.log("Connection Pooled")

    // Set the SELECT query
    let query = `SELECT * FROM ${table}`
    if (conditions) {
      query += ` WHERE ${conditions}`
    }

    // Execute the query
    let result = await request.query(query)

    console.log("Executed Query");

    return result
  }

  static async update(table, data, conditions) {

    // Create a new request
    let request = new sql.Request(pool)

    // Set the UPDATE query
    let query = `UPDATE ${table} SET ?`
    if (conditions) {
      query += ` WHERE ${conditions}`
    }

    // Execute the query
    return request.query(query, data);
  }

  static async delete(table, conditions) {

    // Create a new request
    let request = new sql.Request(pool)

    // Set the DELETE query
    let query = `DELETE FROM ${table}`
    if (conditions) {
      query += ` WHERE ${conditions}`
    }

    // Execute the query
    return request.query(query);
  }
}

export default ORM;