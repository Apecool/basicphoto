const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/photos', async (req, res) => {
  try {
    const photos = await prisma.photo.findMany({
      include: {
        annotations: true,
      },
    });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

router.get('/photos/:id', async (req, res) => {
  const photo = await prisma.photo.findUnique({
    where: { id: parseInt(req.params.id) },
    include: { annotations: true }
  });
  res.json(photo);
});

module.exports = router;
