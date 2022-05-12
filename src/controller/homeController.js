
import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    //logic
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    res.render('index.ejs', { dataUsers: rows, test: "String test abc" });
}

let getUserPage = async (req, res) => {
    let userId = req.params.id;
    let [user, fields] = await pool.execute(`SELECT * FROM users where id = ?`, [userId])
    return res.send(JSON.stringify(user[0]))
}
module.exports = {
    getHomePage,
    getUserPage
}