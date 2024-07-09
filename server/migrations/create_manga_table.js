/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.createTable("manga", (table) => {
    table.increments("id").primary();
    table
      .integer("main_list_id")
      .unsigned()
      .references("id")
      .inTable("list")
      .onDelete("CASCADE");
    table.string("title").notNullable();
    table.string("image");
    table.text("description");
    table.boolean("completed");
    table.integer("chapters");
    table.integer("chapter_read");
    table.string("progress");
    table.string("link");
    table.timestamp("last_updated");
    table.timestamp("last_read");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("manga");
}
