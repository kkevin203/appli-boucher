const { Order } = require('../models/Order');

module.exports.orders = async (req, res) => {
  const { prod_name, prod_number, prod_prix } = req.body;
  const user_id = req.params.userId;
  const prod_id = req.params.idProd;

  try {
    const newCommand = {
      user_id: user_id,
      prod_id: prod_id,
      prod_name: prod_name,
      prod_number: prod_number,
      prod_prix: prod_prix,
    };
    const o = new Order(newCommand);
    await o.save();

    return res.send('commande acceptée')
  } catch (error) {}
};

module.exports.remOrder=async(req,res)=>{
    const idcommand=req.params.idcommand
    try {
        Order.findByIdAndDelete(idcommand).then((res)=>{
            return res.send("commande annulée")
        })
    } catch (error) {
        
    }
}