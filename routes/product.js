/*
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload-images', upload.array('images', 5), async (req, res) => {
    try {
        const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
        const product = await Product.findById(req.body.productId);
        product.images.push(...imagePaths);
        await product.save();
        res.json({ success: true, images: product.images });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/


const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload-images', upload.array('images', 5), async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.body.productId });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
    product.img.push(...imagePaths);
    await product.save();

    res.status(200).json({ success: true, images: product.img });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading images', details: error.message });
  }
});
