const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/tag', async (req, res) => {
  const { photoId, x, y } = req.body;

  const existingTags = await prisma.annotation.findMany({
    where: { photoId }
  });
  //console.log(existingTags);

  const matchedTag = existingTags.find(annotation =>
    x >= annotation.xstart && x <= annotation.xend &&
    y >= annotation.ystart && y <= annotation.yend
  );

  if (matchedTag) {
    return res.json({ message: `Tag found: ${matchedTag.character}` });
  } else {
    return res.json({ message: 'No matching tag found.' });
  }
});

module.exports = router;
