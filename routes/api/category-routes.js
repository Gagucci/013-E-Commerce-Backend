const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const ctgData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(ctgData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const ctgData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!ctgData) {
      res.status(404).json({ message: 'No Category exists on that id' });
    }
    res.status(200).json(ctgData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
