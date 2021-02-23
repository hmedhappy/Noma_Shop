const pool = require('../../Config/db');

exports.getAchats = async (req, res) => {
  try {
    const todos = await pool.query('SELECT * from achats ;');
    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addAchat = async (req, res) => {
  const data = ({
    code,
    type_achat,
    date_achat,
    mode_paiement,
    montant_total_ht,
    montant_total_ttc,
    montant_total_tva,
    net_a_payer_ht,
    remise,
    net_a_payer,
    longitude_livraison,
    latitude_livraison,
    adresse_livraison,
    date_prevu_livraison,
    commentaire,
    annule,
    user_code,
    grossiste_code,
    fournisseur_code,
  } = req.body);

  try {
    const todos = await pool.query(`
    INSERT INTO public.achats(
       code, type_achat, date_achat, mode_paiement, montant_total_ht, montant_total_ttc, montant_total_tva, net_a_payer_ht, remise, net_a_payer, longitude_livraison, latitude_livraison, adresse_livraison, date_prevu_livraison, commentaire, annule, user_code, grossiste_code, fournisseur_code)
      VALUES (${Object.keys(data).map((key) => `'${data[key]}'`)});
    `);
    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteAchat = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await pool.query(`DELETE FROM public.achats
      WHERE id = ${id};`);
    res.json(todos);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getSingleAchat = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await pool.query(`
    SELECT * 
    FROM achats 
   WHERE id = ${id} ;`);
    res.json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
};
