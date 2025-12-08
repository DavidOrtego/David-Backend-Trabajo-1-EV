const { db } = require('../configuration/database');

async function initDatabase() {
    try {
        const hasTable = await db.schema.hasTable('Pilotos');
        
        if (!hasTable) {
            console.log('Creando tabla Pilotos...');
            await db.schema.createTable('Pilotos', (table) => {
                table.increments('id').primary();
                table.string('name').notNullable().unique();
                table.string('equipo');
                table.string('fecha_nacimiento');
                table.integer('nº_victorias');
                table.string('mejor_tiempo');
                table.boolean('campeonatos');
                table.integer('numero_campeonatos');
                table.timestamps(true, true);
            });
            console.log('✅ Tabla Pilotos creada exitosamente');
        } else {
            console.log('✅ La tabla Pilotos ya existe');
        }

        return true;
    } catch (error) {
        console.error('❌ Error al inicializar la base de datos:', error.message);
        return false;
    }
}

module.exports = { initDatabase };
