const db = require("../../config/db")

module.exports = {
    all(callback){

        db.query(`
        SELECT chefs.*, count(recipes) AS total_recipes
        FROM chefs
        LEFT JOIN recipes ON (chefs.id = recipes.chef_id)
        GROUP BY chefs.id
        `, (err, results) => {
            if(err) throw`Database error ${err}`

            callback(results.rows)
        })
    },
    create(data, callback){
        
        const query = `
        INSERT INTO chefs (
            name,
            avatar_url,
            created_at
        ) VALUES ( $1, $2, $3)
        RETURNING id
        `

        const values = [
           data.name,
           data.avatar_url,
           data.created_at,
        ]

        db.query(query, values, (err, results) => {

            if(err) throw`Database error ${err}`

            callback(results.rows[0])

        })

    },
    find(id, callback){

        db.query(`SELECT *
                FROM chefs
                WHERE chefs.id = $1`, [id], (err, results) => {
                    
                    if(err) throw`Database error ${err}`

                    callback(results.rows[0])
        })
    },
    update(data, callback){
        const query = `
        UPDATE chefs SET
            name=($1),
            avatar_url=($2)
        WHERE id = $3
        `

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values, (err, results) => {
            if(err) throw`Database error ${err}`

            callback()

        })
    },
    delete(id, callback){
        db.query(`DELETE 
                FROM chefs 
                WHERE id = $1`,[id], (err, results) => {

                    if(err) throw`Database error ${err}`

                    return callback()
        })
    },

    findRecipe(chefId, callback){
        const query = `
            SELECT *
            FROM recipes
            WHERE chef_id = $1
        `
        return db.query(query, [chefId], (err, results)=>{
            if(err) throw`Database error ${err}`

            callback(results.rows)
        })
    },

    countRecipe(chefId, callback){
        const query =`
            SELECT count(*) AS qnt
            FROM recipes
            WHERE chef_id = $1
            GROUP BY chef_id
        `
        return db.query(query, [chefId], (err, results)=>{
            if(err) throw`Database error ${err}`

            callback(results.rows[0])
        })

    }

}