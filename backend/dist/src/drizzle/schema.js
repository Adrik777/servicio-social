"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollment = exports.modulos = exports.cursoCategories = exports.cursos = exports.userRoles = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const timestamps = {
    created_at: (0, pg_core_1.timestamp)().defaultNow().notNull(),
    updated_at: (0, pg_core_1.timestamp)().defaultNow().notNull().$onUpdate(() => new Date()),
};
exports.users = (0, pg_core_1.pgTable)("users", Object.assign({ id: (0, pg_core_1.serial)().primaryKey(), roleId: (0, pg_core_1.smallserial)("role_id").notNull().references(() => exports.userRoles.id), name: (0, pg_core_1.varchar)({ length: 255 }).notNull(), email: (0, pg_core_1.varchar)({ length: 255 }).unique().notNull(), subscription: (0, pg_core_1.timestamp)() }, timestamps));
exports.userRoles = (0, pg_core_1.pgTable)("user_roles", {
    id: (0, pg_core_1.smallserial)().primaryKey(),
    role: (0, pg_core_1.varchar)({ length: 255 }).notNull()
});
exports.cursos = (0, pg_core_1.pgTable)("cursos", Object.assign({ id: (0, pg_core_1.serial)().primaryKey(), authorId: (0, pg_core_1.integer)("author_id").notNull().references(() => exports.users.id), name: (0, pg_core_1.varchar)({ length: 255 }).notNull(), urlThumbnail: (0, pg_core_1.varchar)("url_thumbnail", { length: 1024 }).notNull(), urlTrailer: (0, pg_core_1.varchar)("url_trailer", { length: 1024 }).notNull(), description: (0, pg_core_1.varchar)({ length: 255 }).notNull(), categotyId: (0, pg_core_1.smallserial)("category_id").notNull().references(() => exports.cursoCategories.id), price: (0, pg_core_1.numeric)({ precision: 10, scale: 2 }).notNull() }, timestamps));
exports.cursoCategories = (0, pg_core_1.pgTable)("curso_categories", {
    id: (0, pg_core_1.smallserial)().primaryKey(),
    category: (0, pg_core_1.varchar)({ length: 255 }),
});
exports.modulos = (0, pg_core_1.pgTable)("modulos", Object.assign({ curso_id: (0, pg_core_1.integer)().notNull().references(() => exports.cursos.id), order: (0, pg_core_1.integer)().notNull(), name: (0, pg_core_1.varchar)({ length: 255 }).notNull(), description: (0, pg_core_1.varchar)({ length: 1024 }).notNull(), urlVideo: (0, pg_core_1.varchar)("url_video", { length: 1024 }).notNull() }, timestamps), (t) => ({
    pk: (0, pg_core_1.primaryKey)({ columns: [t.curso_id, t.order] })
}));
exports.enrollment = (0, pg_core_1.pgTable)("enrollment", {
    user_id: (0, pg_core_1.integer)().notNull().references(() => exports.users.id),
    curso_id: (0, pg_core_1.integer)().notNull().references(() => exports.cursos.id),
}, (t) => ({
    pk: (0, pg_core_1.primaryKey)({ columns: [t.user_id, t.curso_id] }) // Composite Primary Key
}));
