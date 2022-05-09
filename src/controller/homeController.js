
import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * from users',
        function (err, results, fields) {
            results.map(row => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    address: row.address,
                    email: row.email
                })
            })
            return res.render("index.ejs", { dataUsers: data })
        }
    )
}

module.exports = {
    getHomePage
}