const pool = require('../../Config/db');
var fs = require('fs');
var sql = fs.readFileSync('Controllers/produits/script.sql').toString();

exports.getProduits = async (req, res) => {
  try {
    const todos = await pool.query(sql);
    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addProduit = async (req, res) => {
  const data = ({
    code,
    code_a_barre,
    libelle,
    image,
    collisage,
    ordre,
    tva,
    prix_achat_ht,
    prix_achat_ttc,
    prix_vente_ht,
    prix_vente_ttc,
    fournisseur_code,
    marque_code,
    sousfamille_code,
  } = req.body);

  try {
    const todos = await pool.query(`INSERT INTO public.produits(
      code, code_a_barre, libelle, image, collisage, ordre, tva, prix_achat_ht, prix_achat_ttc, prix_vente_ht, prix_vente_ttc, fournisseur_code, marque_code, sousfamille_code)
      VALUES (${Object.keys(data).map((key) => `'${data[key]}'`)});
    `);
    res.json(todos);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteProduit = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await pool.query(`DELETE FROM public.produits
      WHERE id = ${id};`);
    res.json(todos);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getSingleProduit = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await pool.query(` SELECT * 
    FROM achats 
   WHERE id = ${id} ;`);
    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};
