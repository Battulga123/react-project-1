import { pool } from "../config/mysql-config.js";

export async function getAllProducts() {
  const [rows] = await pool.query(`select * from products`);

  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescriptions(row.id);
      row.description = descriptions.map((d) => d.description);
      const review = await getRevies(row.id);
      row.review = review;
      const images = await getImages(row.id);
      row.imgUrl = images;
      const color = await getColors(row.id);
      row.color = color.map((c) => c.color);
      const size = await getSizes(row.id);
      row.size = size.map((s) => s.size);

      console.log(descriptions);
    })
  );
  return rows;
}

export async function search(keyword) {
  const [rows] = await pool.query(
    `select * from products WHERE title like '%${keyword}%'`
  );
  await Promise.all(
    rows.map(async (row) => {
      console.log(row);
      const descriptions = await getDescriptions(row.id);
      row.description = descriptions.map((d) => d.description);
      const review = await getRevies(row.id);
      row.review = review;
      const images = await getImages(row.id);
      row.image = images;
      const color = await getColors(row.id);
      row.color = color.map((c) => c.color);
      const size = await getSizes(row.id);
      row.size = size.map((s) => s.size);

      console.log(descriptions);
    })
  );

  return rows;
}

export async function getDescriptions(productId) {
  const [rows] = await pool.query(
    `Select * from product_description where product_id=?`,
    [productId]
  );
  return rows;
}

export async function getRevies(productId) {
  const [rows] = await pool.query(
    `Select customer, review from product_reviews where product_id=?`,
    [productId]
  );
  return rows;
}

export async function getImages(productId) {
  const [rows] = await pool.query(
    `Select original, thumbnail from product_images where product_id=?`,
    [productId]
  );
  return rows;
}

export async function getSizes(productId) {
  const [rows] = await pool.query(
    `Select * from product_size ps LEFT JOIN size s ON s.id = ps.size_id where product_id=?`,
    [productId]
  );
  return rows;
}

export async function getColors(productId) {
  const [rows] = await pool.query(
    `Select * from product_colors pc LEFT JOIN color c ON c.id = pc.color_id where product_id=?`,
    [productId]
  );
  return rows;
}
