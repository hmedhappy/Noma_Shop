const pool = require('../../Config/db');
var fs = require('fs');
// var sql = fs.readFileSync('script.sql');

exports.getUsers = async (req, res) => {
  try {
    const todos = await pool.query('select * from users ;');
    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addUser = async (req, res) => {
  const data = ({
    code,
    user_email,
    user_login,
    user_password,
    user_name,
    user_lastname,
    user_gender,
    user_birthday,
    user_telephone,
    user_adresse,
    user_image,
    user_type,
    abonnement_newsletters,
  } = req.body);

  try {
    const todos = await pool.query(`INSERT INTO public.users(
        code, user_email, user_login, user_password, user_name, user_lastname, user_gender, user_birthday, user_telephone, user_adresse, user_image, user_type, abonnement_newsletters)
        VALUES (${Object.keys(data).map((key) => `'${data[key]}'`)});
    `);
    res.json(todos);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await pool.query(`DELETE FROM public.users
      WHERE id = ${id};`);
    res.json(todos);
  } catch (error) {
    console.log(error.message);
  }
};
exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await pool.query(` SELECT * 
      FROM users 
     WHERE id = ${id} ;`);
    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};
