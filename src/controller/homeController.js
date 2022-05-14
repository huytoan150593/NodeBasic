
import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {
    //logic
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    res.render('index.ejs', { dataUsers: rows, test: "String test abc" });
}

let getUserPage = async (req, res) => {
    let userId = req.params.id;
    let [user, fields] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [userId])
    return res.send(JSON.stringify(user[0]))
}

let createUser = async (req, res) => {
    let { firstName, lastName, address, email } = req.body
    await pool.execute('INSERT INTO users(firstName, lastName, address, email) VALUES (?, ?, ?, ?)',
        [firstName, lastName, address, email])
    return res.redirect('/')
}

let showInfo = async (req, res) => {
    let userId = req.params.id;
    let [user, fields] = await pool.execute('SELECT * FROM users WHERE id = ?', [userId])
    return res.render('updateUser.ejs', { dataUsers: user[0] })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, address, email, id } = req.body
    await pool.execute('UPDATE users SET firstName = ?, lastName = ?, address = ?, email = ? WHERE id = ?',
        [firstName, lastName, address, email, id])
    console.log(req.body)
    res.send("hello update")
}
module.exports = {
    getHomePage,
    getUserPage,
    createUser,
    showInfo,
    updateUser
}