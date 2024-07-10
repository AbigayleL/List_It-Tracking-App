/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.createTable("custom", (table) => {
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
    table.string("progress");
    table.text("notes");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("custom");
}

/*

Create books
  return knex.schema.createTable('books', table => {
    table.increments('id').primary();
    table.integer('main_list_id').unsigned().references('id').inTable('main_lists').onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('image');
    table.text('description');
    table.integer('chapters');
    table.integer('chapter_read');
    table.string('progress');
    table.string('location');
    table.boolean('series');
  });

Create movies
  return knex.schema.createTable('movies', table => {
    table.increments('id').primary();
    table.integer('main_list_id').unsigned().references('id').inTable('main_lists').onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('image');
    table.text('description');
    table.string('progress');
    table.string('location');
  });



  Create tv

  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Can add if statement on if it is Asian or not
/*
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
    table.integer("episodes_watched");
    table.string("location");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/*
export function down(knex) {
  return knex.schema.dropTable("tv_shows");
}

*/
