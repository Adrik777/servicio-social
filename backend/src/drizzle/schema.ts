import { sql } from "drizzle-orm";
import { integer, pgTable, varchar,serial, timestamp, numeric, smallserial, primaryKey} from "drizzle-orm/pg-core";


const timestamps = {
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull().$onUpdate(() => new Date()),
};


export const users = pgTable("users", {
  id: serial().primaryKey(),
  roleId: smallserial("role_id").notNull().references(() => userRoles.id),
  name: varchar( {length:255 }).notNull(),
  email: varchar( {length:255 }).unique().notNull(),
  subscription: timestamp(),
  //subType: integer("subscription_type").default(0),
  ...timestamps,
});

export const userRoles = pgTable("user_roles",{
  id: smallserial().primaryKey(),
  role: varchar({ length:255 }).notNull()
})


export const cursos = pgTable("cursos", {
  id: serial().primaryKey(),
  authorId: integer("author_id").notNull().references(() => users.id),
  name: varchar({ length: 255 }).notNull(),
  urlThumbnail: varchar("url_thumbnail", { length: 1024 }).notNull(),
  urlTrailer: varchar("url_trailer", { length: 1024 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  categoryId: smallserial("category_id").notNull().references(() => cursoCategories.id),
  price: numeric({ precision: 10, scale: 2 }).notNull(),
  ...timestamps,
});

export const cursoCategories = pgTable("curso_categories", {
  id: smallserial().primaryKey(),
  category: varchar({ length: 255 }),
});

export const modulos = pgTable("modulos",{
  curso_id: integer().notNull().references(()=> cursos.id),
  order: integer().notNull(),
  name: varchar( {length: 255 }).notNull(),
  description: varchar( {length: 1024 }).notNull(),
  urlVideo: varchar("url_video", {length: 1024 }).notNull(),
  ...timestamps
},(t) =>({
  pk: primaryKey({ columns: [t.curso_id, t.order]})
}))


export const enrollment = pgTable("enrollment",{
    user_id: integer().notNull().references(() => users.id),
    curso_id: integer().notNull().references(() => cursos.id),
  }, (t) => ({
    pk: primaryKey({ columns: [t.user_id, t.curso_id] }) // Composite Primary Key
}));