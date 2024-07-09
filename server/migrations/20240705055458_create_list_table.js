/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.createTable("list", (table) => {
    table.increments("id").primary();
    table.string("list_name").notNullable();
    table
      .integer("type_id")
      .unsigned()
      .references("id")
      .inTable("types")
      .onDelete("CASCADE");
    table.binary("image");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("list");
}
