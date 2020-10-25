const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const equipaments = await connection('equipaments').select('*');
            return response.status(200).json(equipaments);
        } catch (error) {
            return response.status(500).json(error);
        }
    },
    async create(request, response) {
        const { name, serial_number, location, responsible } = request.body;

        try {
            const equipament = await connection('equipaments')
                .select('*')
                .where('serial_number', serial_number)
                .first();

            if (equipament) {
                return response.status(400).json({ error: 'Equipamento já existe!' });
            }

            const [id] = await connection('equipaments').insert({
                name,
                serial_number,
                location,
                responsible
            });

            const equipamentInserted = await connection('equipaments')
                .select('*')
                .where('id', id)
                .first();

            return response.status(201).json(equipamentInserted);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
};