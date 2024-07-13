/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Can add if statement on if it is Asian or not
export function up(knex) {
  return knex.schema.createTable("tv_shows", (table) => {
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
    table.string("progress");
    table.integer("episodes");
    table.integer("episodes_watched");
    table.string("location");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("tv_shows");
}
